export {}

declare global {
  interface Number {
    formatBytes(): string
  }

  interface String {
    cleanUrl(): string

    unSlug(): string

    capitalize(): string
  }
}

Number.prototype.formatBytes = function (this: number): string {
  let units: string[] = ["B", "KB", "MB", "GB", "TB"]
  let bytes: number = this
  let i: number

  for (i = 0; bytes >= 1024 && i < 4; i++) {
    bytes /= 1024
  }
  return bytes.toFixed(2) + units[i]
}

String.prototype.cleanUrl = function (this: string): string {
  return this.replace(/\?.+/, "")
}

String.prototype.unSlug = function (this: string): string {
  return this.replace(/[_-]/g, " ")
}

String.prototype.capitalize = function (this: string): string {
  return this.toLowerCase().replace(/\w/, (first) => first.toUpperCase())
}

interface Array<T> {
  shuffle(): T[]
}

// @ts-expect-error
Array.prototype.shuffle = function <T>(): T[] {
  const newArray = [...this] // Create a new array based on the current array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // Generate a random index within the remaining unshuffled elements

    // Swap elements at indices i and j
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }

  return newArray
}
