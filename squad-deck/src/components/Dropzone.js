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

const UserBox = styled.tr`
	border: solid 1px #000;
	border-radius: 5px;
	padding: 10px;
`;

const Dropzone = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [data, setData] = useState([]);

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
		console.log("data was added - 1");
	}, []);

	const handleFileUpload = () => {
		const file = selectedFiles[0];
		Papa.parse(file, {
			header: true,
			complete: (results) => {
				const originalData = results.data.map((user) => {
					for (const key in user) {
						// console.log(user[key]);
						if (isSSN(user[key])) {
							// console.log(`${user[key]} is an SSN`);
							user[key] = "This was an SSN";
							// console.log(user[key]);
						}
					}
					return user;
				});
				console.log(originalData);
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
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "text/csv": [".csv"] },
	});

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
							// JSX to be returned for each element
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
		</div>
	);
};

export default Dropzone;
