import { React, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

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

const Dropzone = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const onDrop = useCallback((acceptedFiles) => {
		// Do something w/ files
		setSelectedFiles(
			acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "text/csv": [".csv"] },
	});
	const selected_files = selectedFiles?.map((file) => (
		// Do something with each entry
		<div>
			<img src={file.preview} style={{ width: "200px" }} alt="" />
		</div>
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
			{selected_files}
		</div>
	);
};

export default Dropzone;
