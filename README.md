# Testare

Uni project to learn testing with jest

## Why Jest?

In JavaScript world, there are at leat 10 packages for everything you need, and testing is no exception. From the variety of testing libraries i choose to go with Jest.

Jest is a library supported by the React dev team, which means there is a strong community around this library, which makes it easier to find solutions to problems. When a tool is backed up by a giant like Meta, there’s considerable extra comfort and peace of mind.

## Functional Testing

I divide the input data into classes, and choose a random value from each class so that
to cover all the cases.

The length of the big string have to be between 1 and 20. So there are 3 classes for the iput data: less than 1, bigger than 20, or between 1 and 20. For the last class, there are 2 tests, when the search letter exists in the big string, and when it don't exist.

## Testare Structurala

We transform the program into a directed graph and choose input data so that we can go through it
every branch of the tree.

## Mutation Testing

I used StrykerJS to generate mutants to ensure the quality of the tests. The report about them can be found under `reports/mutation/mutation.html`

## AI Generated Tests

There are some tests that was generated with ChatGPT. The tests are good, writen in a better and more good looking way than my tests. The only issue was that it calculated sumOdd wrong for the last test, with 7 instead if 0. Other that that, good job GPT 🫡

## To Do

- De facut un graf pentru testarea structurala
