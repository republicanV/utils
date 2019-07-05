const detectLink = (text) => {
	const matchTemplate = /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
	return !!matchTemplate.test(text);
}