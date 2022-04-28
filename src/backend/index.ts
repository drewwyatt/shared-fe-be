#!/usr/bin/env ts-node
import { sayHello } from '../shared/say-hello'

console.log("Look i'm a server file.")
console.log(sayHello())
process.exit(0)
