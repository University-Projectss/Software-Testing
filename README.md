# Software Testing

University project to learn testing with Jest

## Why Jest?

In JavaScript world, there are at leat 10 packages for everything you need, and testing is no exception. From the variety of testing libraries i choose to go with Jest.

Jest is a library supported by the React dev team, which means there is a strong community around this library, which makes it easier to find solutions to problems. When a tool is backed up by a giant like Meta, there’s considerable extra comfort and peace of mind.

## Functional Testing

I divide the input data into classes, and choose a random value from each class so that
to cover all the cases.

The length of the big string have to be between 1 and 20. So there are 3 classes for the iput data: less than 1, bigger than 20, or between 1 and 20. For the last class, there are 2 tests, when the search letter exists in the big string, and when it don't exist.

## Structural Testing

We transform the program into a directed graph and choose input data so that we can go through it
every branch of the tree.

![structutal testing graph](https://github.com/rob3rtu/Testare/blob/main/StructuralTestingGraph.png?raw=true)

## Mutation Testing

I used StrykerJS to generate mutants to ensure the quality of the tests. The report about them can be found under `reports/mutation/mutation.html`

## Why Stryker

Well, after some research on the web, it seems like Stryker is the only library out there that can perform mutation testing in JavaScript.

## AI Generated Tests

There are some tests that was generated with ChatGPT. I gaved him the functions and simply told him to write some unit tests with Jest.

The tests are good, writen in a better and more good looking way than my tests. One issue was that it calculated sumOdd wrong for the last test, with 7 instead if 0. Other that that, good job GPT 🫡

Another issue is that it doesn't generated the minimum number of tests: if I remove 2-3 tests, the code coverage is still 100%.

## To do

- de imbunatatit documentatia pe testarea functionala, de explicat clasele ca in curs, frontiera si sa adaug mai multe teste pe frontiera
- bibliografie
- de refacut referatul
- de facut prezentarea + video-uri
- sa arat cum erau mutantii initial si cum i am facut sa nu mai supravietuiasca niciunu
