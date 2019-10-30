# DESCRIPTION #

We want to demonstrate how to put up a modular JS system, dependent on Backbone, and have it unit-testable.

Our goal is to use ES6 modules (`import` and `export` directives) when interacting with the model, keeping scripts separate and tidy.

Usage of a Unix console emulator is highly encouraged.

## Dependencies ##

We use `npm` as package manager, `Karma` for unit test management, `mocha` as unit test suite and `chai` for our assertions.

`Karma` will use one of two reporters: `JUnit` is the default and will create a xml file to hold test results. `progress` is simpler and can be checked via console.

# OPERATIONS

## Run Tests ##

To run tests:

```
npm install
npm test
```

This will run tests in headless chrome browser, the same as if you ran:

```
karma start karma.conf.js
```

The default reporter is JUnit. The test results will be found under `test-results/test-results.xml`.

Alternatively, run:

```
npm test -- --reporter progress
```

to have test results directly in console.

## Run the example page ##

Run `http-server`, then browse `localhost:8080/backbone-tutorial.html` to see the running examples.