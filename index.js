let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

// console.log(secretMessage.length);

secretMessage.push("to", "Program");

// console.log(secretMessage.length);

secretMessage[7]='right';

secretMessage.shift(1);

secretMessage.splice(0, 0, 'Programming');

console.log(secretMessage);

secretMessage.splice(6, 5, "know");

console.log(secretMessage.join(' '));

