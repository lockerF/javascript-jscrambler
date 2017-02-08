"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApplication = createApplication;
exports.duplicateApplication = duplicateApplication;
exports.removeApplication = removeApplication;
exports.removeProtection = removeProtection;
exports.cancelProtection = cancelProtection;
exports.updateApplication = updateApplication;
exports.unlockApplication = unlockApplication;
exports.addApplicationSource = addApplicationSource;
exports.updateApplicationSource = updateApplicationSource;
exports.removeSourceFromApplication = removeSourceFromApplication;
exports.createTemplate = createTemplate;
exports.removeTemplate = removeTemplate;
exports.updateTemplate = updateTemplate;
exports.createApplicationProtection = createApplicationProtection;
exports.applyTemplate = applyTemplate;
var createApplicationDefaultFragments = "\n  _id,\n  createdAt,\n  name\n";

function createApplication(data) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createApplicationDefaultFragments;

  return {
    query: "\n      mutation createApplication ($data: ApplicationCreate!) {\n        createApplication(data: $data) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      data: data
    }
  };
}

var duplicateApplicationDefaultFragments = "\n  _id\n";

function duplicateApplication(id) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : duplicateApplicationDefaultFragments;

  return {
    query: "\n      mutation duplicateApplication ($_id: String!) {\n        duplicateApplication (_id: $_id) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      _id: id
    }
  };
}

var removeApplicationDefaultFragments = "\n  _id\n";

function removeApplication(id) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : removeApplicationDefaultFragments;

  return {
    query: "\n      mutation removeApplication ($_id: String!) {\n        removeApplication (_id: $_id) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      _id: id
    }
  };
}

var removeProtectionDefaultFragments = "\n  _id\n";

function removeProtection(id, appId) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : removeProtectionDefaultFragments;

  return {
    query: "\n      mutation removeProtection ($_id: String!, $applicationId: String!) {\n        removeProtection (_id: $_id, applicationId: $applicationId) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      _id: id,
      applicationId: appId
    }
  };
}

var cancelProtectionDefaultFragments = "\n  _id\n";

function cancelProtection(id, appId) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cancelProtectionDefaultFragments;

  return {
    query: "\n      mutation cancelProtection ($_id: String!, $applicationId: String!) {\n        cancelProtection (_id: $_id, applicationId: $applicationId) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      _id: id,
      applicationId: appId
    }
  };
}

var updateApplicationDefaultFragments = "\n  _id,\n  createdAt,\n  name\n";

function updateApplication(application) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : updateApplicationDefaultFragments;

  var applicationId = application._id;
  delete application._id;

  return {
    query: "\n      mutation updateApplication ($applicationId: String!, $data: ApplicationUpdate!) {\n        updateApplication (_id: $applicationId, data: $data) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      applicationId: applicationId,
      data: application
    }
  };
}

var unlockApplicationDefaultFragments = "\n  _id,\n  createdAt,\n  name\n";

function unlockApplication(application) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : unlockApplicationDefaultFragments;

  return {
    query: "\n      mutation unlockApplication ($applicationId: String!) {\n        unlockApplication (_id: $applicationId) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      applicationId: application._id
    }
  };
}

var addApplicationSourceDefaultFragments = "\n  _id,\n  filename,\n  extension\n";

function addApplicationSource(applicationId, data) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : addApplicationSourceDefaultFragments;

  return {
    query: "\n      mutation addSourceToApplication ($applicationId: String!, $data: ApplicationSourceCreate!) {\n        addSourceToApplication(applicationId: $applicationId, data: $data) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      applicationId: applicationId,
      data: data
    }
  };
}

var updateApplicationSourceDefaultFragments = "\n  _id,\n  filename,\n  extension\n";

function updateApplicationSource(applicationSource) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : updateApplicationSourceDefaultFragments;

  var sourceId = applicationSource._id;
  delete applicationSource._id;

  return {
    query: "\n      mutation updateApplicationSource ($sourceId: String!, $data: ApplicationSourceUpdate!) {\n        updateApplicationSource(_id: $sourceId, data: $data) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      sourceId: sourceId,
      data: applicationSource
    }
  };
}

var removeSourceFromApplicationDefaultFragments = "\n  _id,\n  sources {\n    filename\n  }\n";

function removeSourceFromApplication(filename, applicationId) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : removeSourceFromApplicationDefaultFragments;

  return {
    query: "\n      mutation removeSource ($filename: String!, $applicationId: String!) {\n        removeSource (filename: $filename, applicationId: $applicationId) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      filename: filename,
      applicationId: applicationId
    }
  };
}

var createTemplateDefaultFragments = "\n  _id,\n  name,\n  description,\n  parameters\n";

function createTemplate(template) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createTemplateDefaultFragments;

  return {
    query: "\n      mutation createTemplate ($data: TemplateInput!) {\n        createTemplate (data: $data) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      data: template
    }
  };
}

var removeTemplateDefaultFragments = "\n  _id\n";

function removeTemplate(id) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : removeTemplateDefaultFragments;

  return {
    query: "\n      mutation removeTemplate ($_id: String!) {\n        removeTemplate (_id: $_id) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      _id: id
    }
  };
}

var updateTemplateDefaultFragments = "\n  _id,\n  parameters\n";

function updateTemplate(template) {
  var fragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : updateTemplateDefaultFragments;

  var templateId = template._id;
  delete template._id;

  return {
    query: "\n      mutation updateTemplate ($templateId: ID!, $data: TemplateInput!) {\n        updateTemplate (_id: $templateId, data: $data) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      templateId: templateId,
      data: template
    }
  };
}

var createProtectionDefaultFragments = "\n  _id,\n  state\n";

function createApplicationProtection(applicationId, bail) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createProtectionDefaultFragments;

  return {
    query: "\n      mutation createApplicationProtection ($applicationId: String!, $bail: Boolean) {\n        createApplicationProtection (applicationId: $applicationId, bail: $bail) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      applicationId: applicationId,
      bail: bail
    }
  };
}

var applyTemplateDefaultFragments = "\n  _id,\n  parameters\n";

function applyTemplate(templateId, appId) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : applyTemplateDefaultFragments;

  return {
    query: "\n      mutation applyTemplate ($templateId: String!, $appId: String!) {\n        applyTemplate (templateId: $templateId, appId: $appId) {\n          " + fragments + "\n        }\n      }\n    ",
    params: {
      templateId: templateId,
      appId: appId
    }
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvbXV0YXRpb25zLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFwcGxpY2F0aW9uIiwiZHVwbGljYXRlQXBwbGljYXRpb24iLCJyZW1vdmVBcHBsaWNhdGlvbiIsInJlbW92ZVByb3RlY3Rpb24iLCJjYW5jZWxQcm90ZWN0aW9uIiwidXBkYXRlQXBwbGljYXRpb24iLCJ1bmxvY2tBcHBsaWNhdGlvbiIsImFkZEFwcGxpY2F0aW9uU291cmNlIiwidXBkYXRlQXBwbGljYXRpb25Tb3VyY2UiLCJyZW1vdmVTb3VyY2VGcm9tQXBwbGljYXRpb24iLCJjcmVhdGVUZW1wbGF0ZSIsInJlbW92ZVRlbXBsYXRlIiwidXBkYXRlVGVtcGxhdGUiLCJjcmVhdGVBcHBsaWNhdGlvblByb3RlY3Rpb24iLCJhcHBseVRlbXBsYXRlIiwiY3JlYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzIiwiZGF0YSIsImZyYWdtZW50cyIsInF1ZXJ5IiwicGFyYW1zIiwiZHVwbGljYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzIiwiaWQiLCJfaWQiLCJyZW1vdmVBcHBsaWNhdGlvbkRlZmF1bHRGcmFnbWVudHMiLCJyZW1vdmVQcm90ZWN0aW9uRGVmYXVsdEZyYWdtZW50cyIsImFwcElkIiwiYXBwbGljYXRpb25JZCIsImNhbmNlbFByb3RlY3Rpb25EZWZhdWx0RnJhZ21lbnRzIiwidXBkYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzIiwiYXBwbGljYXRpb24iLCJ1bmxvY2tBcHBsaWNhdGlvbkRlZmF1bHRGcmFnbWVudHMiLCJhZGRBcHBsaWNhdGlvblNvdXJjZURlZmF1bHRGcmFnbWVudHMiLCJ1cGRhdGVBcHBsaWNhdGlvblNvdXJjZURlZmF1bHRGcmFnbWVudHMiLCJhcHBsaWNhdGlvblNvdXJjZSIsInNvdXJjZUlkIiwicmVtb3ZlU291cmNlRnJvbUFwcGxpY2F0aW9uRGVmYXVsdEZyYWdtZW50cyIsImZpbGVuYW1lIiwiY3JlYXRlVGVtcGxhdGVEZWZhdWx0RnJhZ21lbnRzIiwidGVtcGxhdGUiLCJyZW1vdmVUZW1wbGF0ZURlZmF1bHRGcmFnbWVudHMiLCJ1cGRhdGVUZW1wbGF0ZURlZmF1bHRGcmFnbWVudHMiLCJ0ZW1wbGF0ZUlkIiwiY3JlYXRlUHJvdGVjdGlvbkRlZmF1bHRGcmFnbWVudHMiLCJiYWlsIiwiYXBwbHlUZW1wbGF0ZURlZmF1bHRGcmFnbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxpQixHQUFBQSxpQjtRQW1CQUMsb0IsR0FBQUEsb0I7UUFtQkFDLGlCLEdBQUFBLGlCO1FBbUJBQyxnQixHQUFBQSxnQjtRQW9CQUMsZ0IsR0FBQUEsZ0I7UUFzQkFDLGlCLEdBQUFBLGlCO1FBeUJBQyxpQixHQUFBQSxpQjtRQXFCQUMsb0IsR0FBQUEsb0I7UUFzQkFDLHVCLEdBQUFBLHVCO1FBMEJBQywyQixHQUFBQSwyQjtRQXVCQUMsYyxHQUFBQSxjO1FBbUJBQyxjLEdBQUFBLGM7UUFvQkFDLGMsR0FBQUEsYztRQXdCQUMsMkIsR0FBQUEsMkI7UUFxQkFDLGEsR0FBQUEsYTtBQWxUaEIsSUFBTUMsc0VBQU47O0FBTU8sU0FBU2YsaUJBQVQsQ0FBNEJnQixJQUE1QixFQUFpRjtBQUFBLE1BQS9DQyxTQUErQyx1RUFBbkNGLGlDQUFtQzs7QUFDdEYsU0FBTztBQUNMRyxzSUFHUUQsU0FIUiwrQkFESztBQVFMRSxZQUFRO0FBQ05IO0FBRE07QUFSSCxHQUFQO0FBWUQ7O0FBRUQsSUFBTUksa0RBQU47O0FBSU8sU0FBU25CLG9CQUFULENBQStCb0IsRUFBL0IsRUFBcUY7QUFBQSxNQUFsREosU0FBa0QsdUVBQXRDRyxvQ0FBc0M7O0FBQzFGLFNBQU87QUFDTEYsK0hBR1FELFNBSFIsK0JBREs7QUFRTEUsWUFBUTtBQUNORyxXQUFLRDtBQURDO0FBUkgsR0FBUDtBQVlEOztBQUVELElBQU1FLCtDQUFOOztBQUlPLFNBQVNyQixpQkFBVCxDQUE0Qm1CLEVBQTVCLEVBQStFO0FBQUEsTUFBL0NKLFNBQStDLHVFQUFuQ00saUNBQW1D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LG1IQUdRRCxTQUhSLCtCQURLO0FBUUxFLFlBQVE7QUFDTkcsV0FBS0Q7QUFEQztBQVJILEdBQVA7QUFZRDs7QUFFRCxJQUFNbUIsMkRBQU47O0FBS08sU0FBUzVCLGNBQVQsQ0FBeUIwQixRQUF6QixFQUErRTtBQUFBLE1BQTVDckIsU0FBNEMsdUVBQWhDdUIsOEJBQWdDOztBQUNwRixNQUFNQyxhQUFhSCxTQUFTaEIsR0FBNUI7QUFDQSxTQUFPZ0IsU0FBU2hCLEdBQWhCOztBQUVBLFNBQU87QUFDTEosaUtBR1FELFNBSFIsK0JBREs7QUFRTEUsWUFBUTtBQUNOc0IsNEJBRE07QUFFTnpCLFlBQU1zQjtBQUZBO0FBUkgsR0FBUDtBQWFEOztBQUVELElBQU1JLHdEQUFOOztBQUtPLFNBQVM3QiwyQkFBVCxDQUFzQ2EsYUFBdEMsRUFBcURpQixJQUFyRCxFQUF5RztBQUFBLE1BQTlDMUIsU0FBOEMsdUVBQWxDeUIsZ0NBQWtDOztBQUM5RyxTQUFPO0FBQ0x4Qix3TUFHUUQsU0FIUiwrQkFESztBQVFMRSxZQUFRO0FBQ05PLHFCQUFlQSxhQURUO0FBRU5pQixZQUFNQTtBQUZBO0FBUkgsR0FBUDtBQWFEOztBQUVELElBQU1DLDBEQUFOOztBQUtPLFNBQVM5QixhQUFULENBQXdCMkIsVUFBeEIsRUFBb0NoQixLQUFwQyxFQUFzRjtBQUFBLE1BQTNDUixTQUEyQyx1RUFBL0IyQiw2QkFBK0I7O0FBQzNGLFNBQU87QUFDTDFCLHNLQUdRRCxTQUhSLCtCQURLO0FBUUxFLFlBQVE7QUFDTnNCLDRCQURNO0FBRU5oQjtBQUZNO0FBUkgsR0FBUDtBQWFEIiwiZmlsZSI6Im11dGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUFwcGxpY2F0aW9uRGVmYXVsdEZyYWdtZW50cyA9IGBcbiAgX2lkLFxuICBjcmVhdGVkQXQsXG4gIG5hbWVcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHBsaWNhdGlvbiAoZGF0YSwgZnJhZ21lbnRzID0gY3JlYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGBcbiAgICAgIG11dGF0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uICgkZGF0YTogQXBwbGljYXRpb25DcmVhdGUhKSB7XG4gICAgICAgIGNyZWF0ZUFwcGxpY2F0aW9uKGRhdGE6ICRkYXRhKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgZGF0YVxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgZHVwbGljYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWRcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVBcHBsaWNhdGlvbiAoaWQsIGZyYWdtZW50cyA9IGR1cGxpY2F0ZUFwcGxpY2F0aW9uRGVmYXVsdEZyYWdtZW50cykge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBgXG4gICAgICBtdXRhdGlvbiBkdXBsaWNhdGVBcHBsaWNhdGlvbiAoJF9pZDogU3RyaW5nISkge1xuICAgICAgICBkdXBsaWNhdGVBcHBsaWNhdGlvbiAoX2lkOiAkX2lkKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgX2lkOiBpZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgcmVtb3ZlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWRcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBcHBsaWNhdGlvbiAoaWQsIGZyYWdtZW50cyA9IHJlbW92ZUFwcGxpY2F0aW9uRGVmYXVsdEZyYWdtZW50cykge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBgXG4gICAgICBtdXRhdGlvbiByZW1vdmVBcHBsaWNhdGlvbiAoJF9pZDogU3RyaW5nISkge1xuICAgICAgICByZW1vdmVBcHBsaWNhdGlvbiAoX2lkOiAkX2lkKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgX2lkOiBpZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgcmVtb3ZlUHJvdGVjdGlvbkRlZmF1bHRGcmFnbWVudHMgPSBgXG4gIF9pZFxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3RlY3Rpb24gKGlkLCBhcHBJZCwgZnJhZ21lbnRzID0gcmVtb3ZlUHJvdGVjdGlvbkRlZmF1bHRGcmFnbWVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogYFxuICAgICAgbXV0YXRpb24gcmVtb3ZlUHJvdGVjdGlvbiAoJF9pZDogU3RyaW5nISwgJGFwcGxpY2F0aW9uSWQ6IFN0cmluZyEpIHtcbiAgICAgICAgcmVtb3ZlUHJvdGVjdGlvbiAoX2lkOiAkX2lkLCBhcHBsaWNhdGlvbklkOiAkYXBwbGljYXRpb25JZCkge1xuICAgICAgICAgICR7ZnJhZ21lbnRzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIF9pZDogaWQsXG4gICAgICBhcHBsaWNhdGlvbklkOiBhcHBJZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgY2FuY2VsUHJvdGVjdGlvbkRlZmF1bHRGcmFnbWVudHMgPSBgXG4gIF9pZFxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFByb3RlY3Rpb24gKGlkLCBhcHBJZCwgZnJhZ21lbnRzID0gY2FuY2VsUHJvdGVjdGlvbkRlZmF1bHRGcmFnbWVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogYFxuICAgICAgbXV0YXRpb24gY2FuY2VsUHJvdGVjdGlvbiAoJF9pZDogU3RyaW5nISwgJGFwcGxpY2F0aW9uSWQ6IFN0cmluZyEpIHtcbiAgICAgICAgY2FuY2VsUHJvdGVjdGlvbiAoX2lkOiAkX2lkLCBhcHBsaWNhdGlvbklkOiAkYXBwbGljYXRpb25JZCkge1xuICAgICAgICAgICR7ZnJhZ21lbnRzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIF9pZDogaWQsXG4gICAgICBhcHBsaWNhdGlvbklkOiBhcHBJZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgdXBkYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWQsXG4gIGNyZWF0ZWRBdCxcbiAgbmFtZVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFwcGxpY2F0aW9uIChhcHBsaWNhdGlvbiwgZnJhZ21lbnRzID0gdXBkYXRlQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzKSB7XG4gIGNvbnN0IGFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbi5faWQ7XG4gIGRlbGV0ZSBhcHBsaWNhdGlvbi5faWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogYFxuICAgICAgbXV0YXRpb24gdXBkYXRlQXBwbGljYXRpb24gKCRhcHBsaWNhdGlvbklkOiBTdHJpbmchLCAkZGF0YTogQXBwbGljYXRpb25VcGRhdGUhKSB7XG4gICAgICAgIHVwZGF0ZUFwcGxpY2F0aW9uIChfaWQ6ICRhcHBsaWNhdGlvbklkLCBkYXRhOiAkZGF0YSkge1xuICAgICAgICAgICR7ZnJhZ21lbnRzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGFwcGxpY2F0aW9uSWQsXG4gICAgICBkYXRhOiBhcHBsaWNhdGlvblxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgdW5sb2NrQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWQsXG4gIGNyZWF0ZWRBdCxcbiAgbmFtZVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVubG9ja0FwcGxpY2F0aW9uIChhcHBsaWNhdGlvbiwgZnJhZ21lbnRzID0gdW5sb2NrQXBwbGljYXRpb25EZWZhdWx0RnJhZ21lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGBcbiAgICAgIG11dGF0aW9uIHVubG9ja0FwcGxpY2F0aW9uICgkYXBwbGljYXRpb25JZDogU3RyaW5nISkge1xuICAgICAgICB1bmxvY2tBcHBsaWNhdGlvbiAoX2lkOiAkYXBwbGljYXRpb25JZCkge1xuICAgICAgICAgICR7ZnJhZ21lbnRzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGFwcGxpY2F0aW9uSWQ6IGFwcGxpY2F0aW9uLl9pZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgYWRkQXBwbGljYXRpb25Tb3VyY2VEZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWQsXG4gIGZpbGVuYW1lLFxuICBleHRlbnNpb25cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcHBsaWNhdGlvblNvdXJjZSAoYXBwbGljYXRpb25JZCwgZGF0YSwgZnJhZ21lbnRzID0gYWRkQXBwbGljYXRpb25Tb3VyY2VEZWZhdWx0RnJhZ21lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGBcbiAgICAgIG11dGF0aW9uIGFkZFNvdXJjZVRvQXBwbGljYXRpb24gKCRhcHBsaWNhdGlvbklkOiBTdHJpbmchLCAkZGF0YTogQXBwbGljYXRpb25Tb3VyY2VDcmVhdGUhKSB7XG4gICAgICAgIGFkZFNvdXJjZVRvQXBwbGljYXRpb24oYXBwbGljYXRpb25JZDogJGFwcGxpY2F0aW9uSWQsIGRhdGE6ICRkYXRhKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgYXBwbGljYXRpb25JZCxcbiAgICAgIGRhdGFcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IHVwZGF0ZUFwcGxpY2F0aW9uU291cmNlRGVmYXVsdEZyYWdtZW50cyA9IGBcbiAgX2lkLFxuICBmaWxlbmFtZSxcbiAgZXh0ZW5zaW9uXG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQXBwbGljYXRpb25Tb3VyY2UgKGFwcGxpY2F0aW9uU291cmNlLCBmcmFnbWVudHMgPSB1cGRhdGVBcHBsaWNhdGlvblNvdXJjZURlZmF1bHRGcmFnbWVudHMpIHtcbiAgY29uc3Qgc291cmNlSWQgPSBhcHBsaWNhdGlvblNvdXJjZS5faWQ7XG4gIGRlbGV0ZSBhcHBsaWNhdGlvblNvdXJjZS5faWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogYFxuICAgICAgbXV0YXRpb24gdXBkYXRlQXBwbGljYXRpb25Tb3VyY2UgKCRzb3VyY2VJZDogU3RyaW5nISwgJGRhdGE6IEFwcGxpY2F0aW9uU291cmNlVXBkYXRlISkge1xuICAgICAgICB1cGRhdGVBcHBsaWNhdGlvblNvdXJjZShfaWQ6ICRzb3VyY2VJZCwgZGF0YTogJGRhdGEpIHtcbiAgICAgICAgICAke2ZyYWdtZW50c31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgcGFyYW1zOiB7XG4gICAgICBzb3VyY2VJZDogc291cmNlSWQsXG4gICAgICBkYXRhOiBhcHBsaWNhdGlvblNvdXJjZVxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgcmVtb3ZlU291cmNlRnJvbUFwcGxpY2F0aW9uRGVmYXVsdEZyYWdtZW50cyA9IGBcbiAgX2lkLFxuICBzb3VyY2VzIHtcbiAgICBmaWxlbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU291cmNlRnJvbUFwcGxpY2F0aW9uIChmaWxlbmFtZSwgYXBwbGljYXRpb25JZCwgZnJhZ21lbnRzID0gcmVtb3ZlU291cmNlRnJvbUFwcGxpY2F0aW9uRGVmYXVsdEZyYWdtZW50cykge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBgXG4gICAgICBtdXRhdGlvbiByZW1vdmVTb3VyY2UgKCRmaWxlbmFtZTogU3RyaW5nISwgJGFwcGxpY2F0aW9uSWQ6IFN0cmluZyEpIHtcbiAgICAgICAgcmVtb3ZlU291cmNlIChmaWxlbmFtZTogJGZpbGVuYW1lLCBhcHBsaWNhdGlvbklkOiAkYXBwbGljYXRpb25JZCkge1xuICAgICAgICAgICR7ZnJhZ21lbnRzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGZpbGVuYW1lLFxuICAgICAgYXBwbGljYXRpb25JZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgY3JlYXRlVGVtcGxhdGVEZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWQsXG4gIG5hbWUsXG4gIGRlc2NyaXB0aW9uLFxuICBwYXJhbWV0ZXJzXG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUgKHRlbXBsYXRlLCBmcmFnbWVudHMgPSBjcmVhdGVUZW1wbGF0ZURlZmF1bHRGcmFnbWVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogYFxuICAgICAgbXV0YXRpb24gY3JlYXRlVGVtcGxhdGUgKCRkYXRhOiBUZW1wbGF0ZUlucHV0ISkge1xuICAgICAgICBjcmVhdGVUZW1wbGF0ZSAoZGF0YTogJGRhdGEpIHtcbiAgICAgICAgICAke2ZyYWdtZW50c31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgcGFyYW1zOiB7XG4gICAgICBkYXRhOiB0ZW1wbGF0ZVxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgcmVtb3ZlVGVtcGxhdGVEZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWRcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUZW1wbGF0ZSAoaWQsIGZyYWdtZW50cyA9IHJlbW92ZVRlbXBsYXRlRGVmYXVsdEZyYWdtZW50cykge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBgXG4gICAgICBtdXRhdGlvbiByZW1vdmVUZW1wbGF0ZSAoJF9pZDogU3RyaW5nISkge1xuICAgICAgICByZW1vdmVUZW1wbGF0ZSAoX2lkOiAkX2lkKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgX2lkOiBpZFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgdXBkYXRlVGVtcGxhdGVEZWZhdWx0RnJhZ21lbnRzID0gYFxuICBfaWQsXG4gIHBhcmFtZXRlcnNcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZW1wbGF0ZSAodGVtcGxhdGUsIGZyYWdtZW50cyA9IHVwZGF0ZVRlbXBsYXRlRGVmYXVsdEZyYWdtZW50cykge1xuICBjb25zdCB0ZW1wbGF0ZUlkID0gdGVtcGxhdGUuX2lkO1xuICBkZWxldGUgdGVtcGxhdGUuX2lkO1xuXG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGBcbiAgICAgIG11dGF0aW9uIHVwZGF0ZVRlbXBsYXRlICgkdGVtcGxhdGVJZDogSUQhLCAkZGF0YTogVGVtcGxhdGVJbnB1dCEpIHtcbiAgICAgICAgdXBkYXRlVGVtcGxhdGUgKF9pZDogJHRlbXBsYXRlSWQsIGRhdGE6ICRkYXRhKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIGRhdGE6IHRlbXBsYXRlXG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBjcmVhdGVQcm90ZWN0aW9uRGVmYXVsdEZyYWdtZW50cyA9IGBcbiAgX2lkLFxuICBzdGF0ZVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uUHJvdGVjdGlvbiAoYXBwbGljYXRpb25JZCwgYmFpbCwgZnJhZ21lbnRzID0gY3JlYXRlUHJvdGVjdGlvbkRlZmF1bHRGcmFnbWVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogYFxuICAgICAgbXV0YXRpb24gY3JlYXRlQXBwbGljYXRpb25Qcm90ZWN0aW9uICgkYXBwbGljYXRpb25JZDogU3RyaW5nISwgJGJhaWw6IEJvb2xlYW4pIHtcbiAgICAgICAgY3JlYXRlQXBwbGljYXRpb25Qcm90ZWN0aW9uIChhcHBsaWNhdGlvbklkOiAkYXBwbGljYXRpb25JZCwgYmFpbDogJGJhaWwpIHtcbiAgICAgICAgICAke2ZyYWdtZW50c31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhcHBsaWNhdGlvbklkOiBhcHBsaWNhdGlvbklkLFxuICAgICAgYmFpbDogYmFpbFxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgYXBwbHlUZW1wbGF0ZURlZmF1bHRGcmFnbWVudHMgPSBgXG4gIF9pZCxcbiAgcGFyYW1ldGVyc1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGVtcGxhdGUgKHRlbXBsYXRlSWQsIGFwcElkLCBmcmFnbWVudHMgPSBhcHBseVRlbXBsYXRlRGVmYXVsdEZyYWdtZW50cykge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBgXG4gICAgICBtdXRhdGlvbiBhcHBseVRlbXBsYXRlICgkdGVtcGxhdGVJZDogU3RyaW5nISwgJGFwcElkOiBTdHJpbmchKSB7XG4gICAgICAgIGFwcGx5VGVtcGxhdGUgKHRlbXBsYXRlSWQ6ICR0ZW1wbGF0ZUlkLCBhcHBJZDogJGFwcElkKSB7XG4gICAgICAgICAgJHtmcmFnbWVudHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBhcmFtczoge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIGFwcElkXG4gICAgfVxuICB9O1xufVxuIl19
