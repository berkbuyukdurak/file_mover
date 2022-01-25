// Please update this type as same as with the data shape.

/**
 * These are the objects that should be used for solving the function.
 */
type File = {
  id: string;
  name: string;
};

type Folder = {
  id: string;
  name: string;
  files: File[];
};

// According to the function signature, list should be Folder[] type.
type List = Folder[];

export default function move(list: List, source: string, destination: string): List {
  //throw new Error('Not implemented');

  /**
   * Errorful Cases
   */
  /**
   * Case 1: You cannot move a folder.
   * Since all ID's are unique we can search the id's in the folders.
   * Array.every() can be used for this purpose to check all the elements.
   */
  if (!list.every((folder) => folder.id !== source)) {
    throw new Error('You cannot move a folder');
  }

  /**
   * Case 2: You cannot specify a file as the destination.
   * If we cannot find the destination in the folder, we specified the file.
   */
  if (!list.find((folder) => folder.id === destination)) {
    throw new Error('You cannot specify a file as the destination');
  }

  /**
   * Moving file
   * While implementing, try to avoid nested if-else
   */
  list.forEach((folder) => {
    const sourceFileIndex = folder.files.findIndex((file) => file.id === source);

    // Error Case
    if (sourceFileIndex === -1) {
      throw new Error('There is no such file');
    }

    // Finding the file
    let sourceFileToMove = folder.files[sourceFileIndex];

    // Removing file from the array with filter function.
    folder.files = folder.files.filter((file) => file.id !== source);

    // Identifying destination folder
    const destinationFolder = list.find((folder) => folder.id === destination);

    // Error Case, if we cannot find the folder to move our file, throw an error.
    if (!destinationFolder) {
      throw new Error('There is no such folder to move file');
    }
    destinationFolder.files = destinationFolder.files.concat(sourceFileToMove);
  });
  return list;
}
