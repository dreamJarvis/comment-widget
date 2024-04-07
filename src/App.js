/** @format */

import { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import useNode from "./hooks/useNode";
import CommentActions from "./components/CommentActions";

const commentTree = {
	id: 1,
	text: "root",
	childrens: [],
};

function App() {
	const [commentList, setCommentList] = useState(commentTree);
	const { createNodeTree, updateNodeTree, deleteNodeTree } = useNode();

	const createNode = (folderId, value) => {
		const updatedList = createNodeTree(commentList, folderId, value);
		setCommentList({ ...updatedList });
	};

	const updateNode = (folderId, value) => {
		const updatedList = updateNodeTree(commentList, folderId, value);
		setCommentList({ ...updatedList });
	};

	const deleteNode = (folderId) => {
		const updatedList = deleteNodeTree(commentList, folderId);
		setCommentList({ ...updatedList });
	};

	return (
		<Container container className='App'>
			<CommentActions
				key={commentList?.id}
				commentList={commentList}
				createNode={createNode}
				updateNode={updateNode}
				deleteNode={deleteNode}
			/>
		</Container>
	);
}

export default App;
