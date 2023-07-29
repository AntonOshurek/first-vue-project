const arrayFromRange = (start, end) => {
	return [...Array(end).keys()].map((el) => el + start);
};

export { arrayFromRange };
