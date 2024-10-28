# 🦣 Celenium Rollup Leaderboard Reconstructed

[Celenium](https://celenium.io/) is a popular block explorer and toolchain for the [Celestia](https://docs.celestia.org/) core chain and its ecosystem of rollups that build with Celestia underneath.

It has a [rollup leaderboard tab](https://celenium.io/rollups) that gives a nice overview of the registered rollups, and how much blobspace they've utilized on Celestia.

However, the [Celenium API](https://api-docs.celenium.io/folder-1558675)'s free tier does not offer access to the rollups endpoints (fetching data results in a 403 status code).

This repository contatins a small script that allows to recreate the rollup leaderboard in your terminal, learning a thing or two about Celestia and its architecture along the way.

## Quickstart

As a prerequisite, make sure you've got a recent version of [Node.js](https://nodejs.org/en) installed on your machine.

From the root directory of the repo, call:

```sh
# populate the [limit] CLI arg with a value of you choice, it will fetch that number of namespaces sorted by size
# 10 is the default value in case it's not provided
node . 10

```

## Takeaways

While a very simple script in nature, it does highlight some things to remember about Celestia's design.

> Instead of directly fetching the rollup endpoint, we can fetch the namespaces endpoint and then fetch the rollup info for each namespace if registered (we drop those namespaces that have not been mapped to a registered rollup). The relation **rollup <-> namespace** relationship is an important aspect in the design of Celestia, allowing Celestia to scale to ["mammoth" block size](https://blog.celestia.org/mammoth/) while still preserving low cost for applications to download and verify their namespaced data.

The namespaced Merkle Tree (NMT) and data availability sampling (DAS) innovations made by Celestia allow for true scalability without burdening the applications on top of Celestia. Read more about both techniques [in the docs](https://docs.celestia.org/learn/how-celestia-works/data-availability-layer).

## What's next?

You could build on this project by:

* Constructing the leaderboard starting from a certain block height, rather than the aggregate results from the full history

* Creating a front-end and post the leaderboard. Celestia is all about the verifiable web, so maybe you can take a look at the [Chopin](https://chopin.sh/) framework for fully onchain NextJS apps.

* You can take the leaberboard and use it as a base to create an NFT collection for the leaders with mammoth and/or sloth NFT images. Check out [LightLink](https://lightlink.io) and [Forma](https://forma.art/) or other [Celestia ecosystem](https://celestia.org/ecosystem/) projects.

* Whatever... 🦥