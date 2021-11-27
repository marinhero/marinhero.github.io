+++
title = "Tetris, in TypeScript"
date = "2021-11-27"
layout = "post"
author = "Marín"
tags = ["TypeScript", "Gaming", "Web"]
keywords = ["TypeScript", "Tetris"]
description = "An overview of a hobbie project, Tetris written in TypeScript"
showFullContent = false
+++

With the intention of getting more familiarized with TypeScript, I decided to start a new project.
It's been many years since the last time I made a game from scrath so it seemed fitting to give that a go.
I chose Tetris because it's a well known game, with a defined set of problems and functionality. All I had to worry about was to code their solutions.

# The TypeScript Lesson

I did get more familiar with TypeScript, some of its strengths, caveats and tooling. Still, it would be hard (or overengineered) to cover all of the language features in a project. One important feature I left out is [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html), perhaps I need to start working on [Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders) now so I can give it a try?

# Implementation Details

I tried to keep it as lean as possible, therefore this is the tech I used:

- TypeScript 🪛
- HTML Canvas and CSS for drawing and coloring 🎨
- Webpack for bundling everything 📦

# Favorite part

The most fun part of the project was to write the function to create the possible rotations for each piece. I could have used a hard-coded two dimensional array with all of them in there but where's the fun in that?i Another downside of that approach is that I would have to limit the shapes of Tetris pieces I could use. Thanks to this function, I can create my custom shaped Tetris pieces! Anyway, [here's](https://github.com/marinhero/tsetris/blob/master/src/index.ts#L138) the function:

```typescript
 generateRotations(): Cell[][][] {
    let rots: Cell[][][] = []
    let nextBase: Cell[][]

    for (let rotationCounter = 0; rotationCounter < 4; rotationCounter++) {
      rots[rotationCounter] = new BlankPiece(this.rows, this.columns).shape
      let destY = this.columns - 1
      for (let i = 0; i < this.columns; i++) {
        let destX = 0
        for (let j = 0; j < this.rows; j++) {
          if (!nextBase) {
            rots[rotationCounter][destY][destX] = this.shape[j][i]
          } else {
            rots[rotationCounter][destY][destX] = nextBase[j][i]
          }
          destX++
        }
        destY--
      }
      nextBase = rots[rotationCounter]
    }
    return rots
  }
```

I enjoyed working on this function because I had to keep track of how the Tetris piece was moving on every iteration at the cell level. It also forced me to initialize the `rots` array with a `BlankPiece`. This is an object that `extends Piece`. Initializations of the same type aren't required in JavaScript but they are in TypeScript. It was a nice reminder that I had to think about the type system once again.

# Demo

Game available [here](https://marinhero.com/tsetris/) (limited mobile support because that was out of the scope 😆)

![Tetris](https://github.com/marinhero/tsetris/raw/master/dist/demo.gif)