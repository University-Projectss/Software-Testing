# Software Testing

University project to learn testing with Jest

## Why Jest?

In JavaScript world, there are at leat 10 packages for everything you need, and testing is no exception. From the variety of testing libraries i choose to go with Jest[1].

Jest is a library supported by the React dev team, which means there is a strong community around this library, which makes it easier to find solutions to problems. When a tool is backed up by a giant like Meta, there’s considerable extra comfort and peace of mind.[2]

## Functional Testing

I divide the input data into classes, and choose a random value from each class so that
to cover all the cases.

The length of the big string have to be between 1 and 20. So there are 3 classes for the iput data: less than 1, bigger than 20, or between 1 and 20. For the last class, there are 2 tests, when the search letter exists in the big string, and when it don't exist.

So, there are the following classes:

### Equivalence Partitioning for n

    - N_1 = 1...20
    - N_2 = { n | n < 1 }
    - N_3 = { n | n > 20 }

### Equivalence Partitioning for the searched character

    - S_1 = yes, the character was found in the big string
    - S_2 = no, the character was `not` found in the big string

Combining those we will obtain a total of 6 classes to write tests for

### Boundary Values

There are 2 boundaries for n, the lower one and the upper one. For the lower one we will choose the values 0, 1 and 2, and for the upper one 19, 20 and 21.

## Structural Testing

We transform the program into a directed graph and choose input data so that we can go through it
every branch of the tree.

![structutal testing graph](https://github.com/rob3rtu/Testare/blob/main/StructuralTestingGraph.png?raw=true)

## Mutation Testing

I used StrykerJS[3] to generate mutants to ensure the quality of the tests. The report about them can be found under `reports/mutation/mutation.html`

Initally there was 4 mutants that remain alive. In the image below you can see 3 of them with a red dot. Each of this lines was replaced with the `false` condition and survived.

![mutants alive](https://github.com/rob3rtu/Testare/blob/main/mutantsLeft.png?raw=true)

After I tried to solve those condition, I found out that those conditions where not necessary so I just deleted them :)

The 4th mutants was just a function call used to make sure the function logic was correct and I forgot to remove it.

## Why Stryker

Well, after some research on the web, it seems like Stryker is the only library out there that can perform mutation testing in JavaScript.

## AI Generated Tests

There are some tests that was generated with ChatGPT. I gaved him the functions and simply told him to write some unit tests with Jest.

The tests are good, writen in a better and more good looking way than my tests. One issue was that it calculated sumOdd wrong for the last test, with 7 instead if 0. Other that that, good job GPT 🫡

Another issue is that it doesn't generated the minimum number of tests: if I remove 2-3 tests, the code coverage is still 100%.

## Video Demo

Her you can find the [demo of the project](https://youtu.be/r_5SjuVSfTQ).

## Bibliography

1. Jest, https://jestjs.io/
2. Mohsen Taleb, JavaScript unit testing frameworks in 2024: A comparison, https://raygun.com/blog/javascript-unit-testing-frameworks/#jest:~:text=Used%20and%20recommended,if%20not%20minutes
3. Stryker, https://stryker-mutator.io/

## To do

- de facut prezentarea
