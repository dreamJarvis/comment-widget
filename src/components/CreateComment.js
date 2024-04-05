/** @format */

import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";

const CreateComment = ({ setComments }) => {
	const [comment, setComment] = useState("");

	const addComment = () => {
		setComments((prevComments) => [...prevComments, comment]);
		setComment("");
	};

	return (
		<Grid container className='create-comment-container'>
			<Grid item xs={12} className='create-comment-item'>
				<TextField
					label='comments'
					variant='outlined'
					id='comment-input'
					onChange={(e) => setComment(e.target.value)}
					value={comment}
				/>
				<Button
					variant='contained'
					className='add-comment-btn'
					style={{
						marginTop: "0 auto",
					}}
					onClick={addComment}>
					Add
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreateComment;
