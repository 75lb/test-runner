class Queue {
  /**
   * @param {function[]} jobs - An array of functions, each of which return a Promise
   * @param {number} maxConcurrency
   */
  constructor (jobs, maxConcurrency) {
    this.jobs = jobs
    this.activeCount = 0
    this.maxConcurrency = maxConcurrency || 10
  }

  async * [Symbol.asyncIterator] () {
    let output = []
    while (this.jobs.length) {
      const slotsAvailable = this.maxConcurrency - this.activeCount
      if (slotsAvailable > 0) {
        const toRun = []
        for (let i = 0; i < slotsAvailable; i++) {
          const job = this.jobs.shift()
          if (job) {
            toRun.push(job())
            this.activeCount++
          }
        }
        const results = await Promise.all(toRun)
        this.activeCount -= results.length
        for (const result of results) {
          yield result
        }
      }
    }
  }

  async process () {
    let output = []
    while (this.jobs.length) {
      const slotsAvailable = this.maxConcurrency - this.activeCount
      if (slotsAvailable > 0) {
        const toRun = []
        for (let i = 0; i < slotsAvailable; i++) {
          const job = this.jobs.shift()
          if (job) {
            toRun.push(job())
            this.activeCount++
          }
        }
        const results = await Promise.all(toRun)
        this.activeCount -= results.length
        output = output.concat(results)
      }
    }
    return output
  }
}

export default Queue
