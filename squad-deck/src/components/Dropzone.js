import { React, useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Papa from "papaparse";

const Dropbox = styled.div`
	background-color: grey;
	border-radius: 10px;
	height: 100px;
	width: 200px;
	display: flex;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
`;
const DropboxMessage = styled.div`
	margin-left: 200px;
`;

const UserBox = styled.tr`
	border: solid 1px #000;
	border-radius: 5px;
	padding: 10px;
`;

const Dropzone = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [data, setData] = useState([]);

	// edit alpha roster database after dropping
	useEffect(() => {
		console.log(data)
		const postRoster = async () => {
			if (data.length) {
				console.log('Attempting to add to roster...')
				await fetch('http://localhost:8080/roster', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)})
			}
		}
		postRoster();
	}, [data])

	// process file data each time it uploads
	useEffect(() => {
		if (selectedFiles.length > 0) {
			handleFileUpload();
		}
	}, [selectedFiles]);

	// after dropping, set file and handle file data
	const onDrop = useCallback((acceptedFiles) => {
		// do something w/ files
		setSelectedFiles(
			acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	}, []);

	const handleFileUpload = () => {
		const file = selectedFiles[0];
		Papa.parse(file, {
			header: true,
			skipEmptyLines: true,
			complete: (results) => {
				console.log('These are the results: '+results.data);
				const originalData = results.data.map((user) => {
					console.log(user)
					for (const key in user) {
						if (isSSN(user[key])) {
							user[key] = "[Invalid value]";
						}
					}
					return user;
				});

				setData(originalData);
			},
		});
	};

	// check for SSN values
	const isSSN = (number) => {
		const ssnPattern = /^\d{3}(?:[-]\d{2})(?:[-]\d{4})?$/;
		return ssnPattern.test(number);
	};

	// from dropzone pkg
	const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "text/csv": [".csv"] },
	});

	const acceptedFileItems = acceptedFiles.map(file => (
		<li key={file.path}>
		  {file.path} - {file.size} bytes
		</li>
	  ));
	
	  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
		<li key={file.path}>
		  {file.path} - {file.size} bytes
		  <ul>
			{errors.map(e => (
			  <li key={e.code}>{e.message}</li>
			))}
		  </ul>
		</li>
	  ));

	return (
		<div>
			<Dropbox {...getRootProps()}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop files here</p>
				) : (
					<p>Drag n' drop files here, or click to select files</p>
				)}
			</Dropbox>
			<DropboxMessage>
				<h4>Accepted files</h4>
				<ul>{acceptedFileItems}</ul>
				<h4>Rejected files</h4>
				<ul>{fileRejectionItems}</ul>
			{data.length ? (
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>SSAN</th>
							<th>Grade</th>
							<th>PAS</th>
							<th>Office Symbol</th>
							<th>Duty Phone</th>
						</tr>
					</thead>
					<tbody>
						{data.map((row, index) => (
							<UserBox key={index}>
								<td>{row.FULL_NAME}</td>
								<td>{row.SSAN}</td>
								<td>{row.GRADE}</td>
								<td>{row.ASSIGNED_PAS_CLEARTEXT}</td>
								<td>{row.OFFICE_SYMBOL}</td>
								<td>{row.DUTY_PHONE}</td>
							</UserBox>
						))}
					</tbody>
				</table>
			) : null}
			</DropboxMessage>
		</div>
	);
};

export default Dropzone;
