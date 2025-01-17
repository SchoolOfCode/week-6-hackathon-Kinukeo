If you would like some guidance, here are some (hopefully) helpful hints 🤝

<ul>
<details>
  <summary>Click here for invalid character error hint 1</summary>
  - RegEx can be used to see if certain characters are in, or not in, a string
</details>
<details>
  <summary>Click here for invalid character error hint 2</summary>
  - The JavaScript RegExp test method, when provided with a set of characters, will check if any of those characters are present in a string. It returns true if a match is found, or false if a match is not found
</details>
<details>
  <summary>Click here for invalid character error hint 3</summary>
  - The JavaScript RegExp test method can also be used to see if anything BUT the provided characters is present in a string.
  This can be achieved using the "Negation Operator"
</details>
</ul>
&nbsp;

Here's the solution I came up with

<details>
  <summary>Click to reveal solution</summary>

```javascript
const specialAgentArray = [
  "Anna-Marie",
  "Nadeem",
  "Ira",
  "Andy",
  "Faisal",
  "Chris",
  "Becks",
  "Lizzie",
  "Victoria",
];

const lowercasedName = name.toLowerCase();

if (/[^a-zA-Z\s\-]/.test(name)) {
  throw new Error("Invalid character found");
} else if (
  specialAgentArray.some((agent) =>
    lowercasedName.includes(agent.toLowerCase())
  )
) {
  return "Special agent";
} else if (lowercasedName.startsWith("super")) {
  return "Superhero";
}
return "Not super enough";
```

</details>
&nbsp;

Remember - there's no RIGHT way to code, this is just my solution.

Let me know how you solved it! 😀
