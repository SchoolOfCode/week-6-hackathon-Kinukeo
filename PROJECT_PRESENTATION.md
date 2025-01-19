# Superhero Experience Kata

## The task

The task was to create a coding problem in the style of codewars (https://www.codewars.com) to show to others and have them try to solve.

It was developed to practise my learning of test driven development and the value it provides when developing software.

## Planning

### Disney ideation

<img src="./images/project_presentation/Hackathon Ideation.png"/>

The first step was to get some general ideas for the theme we'd like to follow. Fortunately we were on the same page and quickly decided on a theme for the project and moved on to:

### Realist Room and MVE

<img src="./images/project_presentation/Hackathon Ideation 2.png"/>

We took these ideas and reduced them to realistic ideas that we thought we would be able to handle in our small time limit.

### Refining MVE

<img src="./images/project_presentation/Hackathon MVE.png"/>

At this point we refined the idea for our minimum viable experiment. We thought about the problems we wanted the user to face and what data the function should return to determine a 'success' condition that would pass out tests.

### Testing Strategies

<img src="./images/project_presentation/Hackathon Equivalence Partitioning.png"/>

At this point we looked at common ways to find which scenarios needed to be tested in order ensure the user created function was working as expected, therefore fulfilling the success condition.

Some common testing methodologies we considered were Equivalence Paritioning, Decision Tables and Boundary Value Analysis.

For my case in particular I found Equivalance Partitioning would allow me to quickly specify which conditions needed to be met, therefore allowing me to come up with inputs and assertions that would appropriately test for these scenarios.

## Tests

```javascript
describe("Function superStatus() tests", () => {
  test("Name Super Louis returns Superhero", () => {
    expect(superStatus("Super Louis")).toBe("Superhero");
  });
  test("Name Ira returns Special agent", () => {
    expect(superStatus("Ira")).toBe("Special agent");
  });
  test("Name Ash Ketchum returns Not super enough", () => {
    expect(superStatus("Ash Ketchum")).toBe("Not super enough");
  });
  test("Name L33t g4mer returns error", () => {
    expect(() => superStatus("L33t g4mer")).toThrowError(
      "Invalid character found"
    );
  });
  test("Name Super Nadeem returns Special agent", () => {
    expect(superStatus("Super Nadeem")).toBe("Special agent");
  });
});
```

I extracted the conditions I decided on in the equivalance partitioning exercises and turned these into tests. The tests are named descriptively enough to explain what is happening to someone external to our development team. They take an input string and assert a specific outcome, the test will fail if this expected outcome isn't met.

## Working as a team

I think our team worked really well this week, we planned together and narrowed down our plans until we were happy to handle the tasks alone. We all planned on github and worked in short sprints with breaks in between. We all made sure to try to handle problems on our own but asked each other for help when we got stuck to keep things running at a good pace.

## Reflections

In the future I will arrange my tests in a clearer manner. I will use the act, arrange, assert structure to more obviously present the input and expected outcome for other developers looking at the code.

## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/week-6-hackathon-Kinukeo.git
```

Go to the project directory

```bash
  cd week-6-hackathon-Kinukeo
```

Install dependencies

```bash
  npm install
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Tech Stack

**Testing:** Vitest

## What I learned

## User Feedback

Instructions were clear.

Not too complicated, focused on work we had already done at the School of Code.

Focused on one filtering one variable and data type.
