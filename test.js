function sortArray(array) {

    const sortedArray = array.sort((a, b) => {
        return (a.split('.')[0] - b.split('.')[0] ||
            a.split('.')[1] - b.split('.')[0] ||
            a.split('.')[2] - b.split('.')[2] ||
            a.split('.')[3] - b.split('.')[3])
    });
    console.log(sortedArray);

}

sortArray(['34.676.22','22.67.23.7', '113.23','45.11.2','45.23.98','45.11','45.11.2','1.4']); // suggested input
