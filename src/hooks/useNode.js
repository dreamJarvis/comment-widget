/** @format */

/* 
   Create, Update, Delete operations for the comment tree
*/
const useNode = () => {
	const createNodeTree = (tree, folderId, value) => {
		if (tree.id === folderId) {
			tree.childrens.push({
				id: new Date().getTime(),
				text: value,
				childrens: [],
			});

			return tree;
		}

		let updatedTreeList = [];
		updatedTreeList = tree.childrens.map((child) => {
			return createNodeTree(child, folderId, value);
		});

		return { ...tree, childrens: updatedTreeList };
	};

	const updateNodeTree = (tree, folderId, updatedValue) => {
		if (tree.id === folderId) {
			tree.text = updatedValue;
			return tree;
		}

		tree.childrens.map((child) => {
			return updateNodeTree(child, folderId, updatedValue);
		});

		return { ...tree };
	};

	const deleteNodeTree = (tree, folderId) => {
		for (let i = 0; i < tree.childrens.length; i++) {
			const currentItem = tree.childrens[i];
			if (currentItem.id === folderId) {
				tree.childrens.splice(i, 1);
				return tree;
			} else {
				deleteNodeTree(currentItem, folderId);
			}
		}

		return tree;
	};

	return { createNodeTree, updateNodeTree, deleteNodeTree };
};

export default useNode;
