import React, { useState, useCallback, useEffect, useContext } from "react";
import { SdUserContext } from "../components/sd-user-context";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Papa from "papaparse";
import { RosterUploadContext } from "./roster-upload-context";
import "../Styled/dropzone-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Dropzone = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [data, setData] = useState([]);
	const { sdUser } = useContext(SdUserContext);
	const { setRosterUpload } = useContext(RosterUploadContext);

	// edit alpha roster database after dropping
	useEffect(() => {
		const postRoster = async () => {
			if (data.length) {
				await fetch(
					`http://localhost:8080/units/${sdUser[0].user_unit_id}/roster`,
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data),
					}
				);
			}
		};
		postRoster();
		setRosterUpload(true);
	}, [data]);

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
				// console.log("These are the results: " + results.data);
				const originalData = results.data.map((user) => {
					// console.log(user);
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
	const {
		acceptedFiles,
		fileRejections,
		getRootProps,
		getInputProps,
		isDragActive,
	} = useDropzone({
		onDrop,
		accept: { "text/csv": [".csv"] },
	});

	const acceptedFileItems = acceptedFiles.map((file) => (
		<ul key={file.path}>
			{file.path} &#x28;{file.size} bytes&#41;
		</ul>
	));

	const fileRejectionItems = fileRejections.map(({ file, errors }) => (
		<ul key={file.path}>
			{file.path} &#x28;{file.size} bytes&#41;
			<ul>
				{errors.map((e) => (
					<ul key={e.code}>{e.message}</ul>
				))}
			</ul>
		</ul>
	));

	return (
		<div className="dropContainer">
			<h2>Upload Alpha Roster</h2>
			<div className="dropbox" {...getRootProps()}>
				<FontAwesomeIcon icon={faCloudArrowUp} size={"3x"} color="white" />
				<input {...getInputProps()} />
				{isDragActive ? (
					<div>Drop files here</div>
				) : (
					<div>Select a .csv file or drag here</div>
				)}
			</div>
			<div className="dropboxMessage">
				<table id="file_status">
					<tr>
						<th>Accepted</th>
						<th>Rejected</th>
					</tr>
					<tr>
						<td>{acceptedFileItems}</td>
						<td>{fileRejectionItems}</td>
					</tr>
				</table>
				{data.length ? (
					<table id="dropzone">
						<tr>
							<th>Name</th>
							<th>Grade</th>
							<th>PAS</th>
							<th>Office Symbol</th>
							<th>Duty Phone</th>
						</tr>
						{data.map((row, index) => (
							<tr key={index}>
								<td>{row.FULL_NAME}</td>
								<td>{row.GRADE}</td>
								<td>{row.ASSIGNED_PAS_CLEARTEXT}</td>
								<td>{row.OFFICE_SYMBOL}</td>
								<td>{row.DUTY_PHONE}</td>
							</tr>
						))}
					</table>
				) : null}
			</div>
		</div>
	);
};

export default Dropzone;
