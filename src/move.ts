// Please update this type as same as with the data shape.

/**
 * These are the objects that should be used for solving the function.
 */
type File = {
  id: string,
  name: string
};

type Folder = {
  id: string,
  name: string,
  files: File[]
}

// According to the function signature, list should be Folder[] type.
type List = Folder[];

export default function move(list: List, source: string, destination: string): List {
  throw new Error('Not implemented');
}
