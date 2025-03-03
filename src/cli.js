#!/usr/bin/env node
import 'dotenv/config'
import { main } from './app'

require('dotenv').config()

main(process.argv).catch((e) => (process.env.DEBUG ? console.error(e) : console.error(e.message)))
