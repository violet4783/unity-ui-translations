// Global script, intended to be included by all packages
// (older packages may not have been updated to include this script)

console.log("GlobalPackageScript included.");

// include feedback form:
$.getScript('/StaticFilesConfig/feedback/feedback.js', function() {});