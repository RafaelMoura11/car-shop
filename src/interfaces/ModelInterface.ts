interface Model<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id_: string): Promise<T | null>,
  update(id_: string, obj: T): Promise<T | null>, 
}

// eslint-disable-next-line import/prefer-default-export
export { Model };