/**
 * Copies the given file the given number of times.
 * @param {String} sourceFolderId Source folder ID (can be taken from source folder URL), mandatory
 * @param {String} sourceFileName Name of the file to be copied, mandatory
 * @param {int} copyCount Number of copies to make; mandatory
 * @param {String} targetFolderId ID of the target folder; optional (same as source folder by default)
 * @param {String} targetNameStart Copy names prefix (will be followed by numbers); optional (source file name by default)
 * @param {Boolean} share whether to enable edit access for everyone with the link; optional (true by default)
 * @return {Object} Execution outcome (ok, error or partial) with details
 */
function CopyMyFiles(sourceFolderId, sourceFileName, copyCount, targetFolderId, targetNameStart, share) {
  if (!copyCount || copyCount <= 0) {
    return {outcome: "error", errorMessage: "Copy count is not valid"};
  }

  var sfl = DriveApp.getFolderById(sourceFolderId);
  var tfl = DriveApp.getFolderById(targetFolderId || sourceFolderId);
  targetNameStart = targetNameStart || sourceFileName;

  if (sfl) {
    var sFileIt = sfl.getFilesByName(sourceFileName);
    if (sFileIt.hasNext()) {
      var sFile = sFileIt.next();

      if (tfl) {
        var copiesMade = 0;
        var copies = [];
        var errors = [];
        for (var i = 1; copiesMade < copyCount; i++) {
          var fileName = targetNameStart + i;

          var foundFile = tfl.getFilesByName(fileName);
          if (! foundFile.hasNext()) {
            var name = targetNameStart + i;
            try {
              copies.push(name)
              var copy = sFile.makeCopy(name, tfl);
              if (typeof share === 'undefined' || share) {
                copy.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
              }
            } catch (error) {
              errors.push({error, name});
            }
            copiesMade++;
          }
        }
        if (errors.length) {
          return {outcome: "partial", message: "Some errors during file copy", copies, errors, share: Boolean(share)};
        } else {
          return {outcome: "ok", message: "Files copied successfully", copies, share: Boolean(share)};
        }

      } else {
        return {outcome: "error", errorMessage: "Target folder not found"};
      }
    } else {
      return {outcome: "error", errorMessage: "Source file not found"};
    }
  } else {
    return {outcome: "error", errorMessage: "Source folder not found"};
  }
}

