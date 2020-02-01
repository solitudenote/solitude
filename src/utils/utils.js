import { isEmpty } from "lodash";

export const readTextFile = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    // Listener
    reader.onload = e => {
      resolve(e.target.result);
    };
    reader.onerror = e => reject(e);

    reader.readAsText(file);
  });
};

export const handleRichTextButtonClick = ({ type = "", editorState }) => {
  // As we don't have the editor state initialized, return null
  if (isEmpty(editorState)) return null;
  let selectedText = editorState.getSelection();
  let cursor = editorState.getCursor();

  switch (type) {
    case "header":
      editorState.setCursor(cursor.line, 0);
      // FIXME
      // Use better variables
      const A1 = editorState.getCursor().line;
      const A2 = editorState.getCursor().ch;
      const B1 = editorState.findWordAt({ line: A1, ch: A2 }).anchor.ch;
      const B2 = editorState.findWordAt({ line: A1, ch: A2 }).head.ch;

      editorState.setSelection({ line: A1, ch: B1 }, { line: A1, ch: B2 });
      selectedText = editorState.getSelection();

      // If header in range of h1-h5
      if (/^#{1,5}$/.test(selectedText)) {
        editorState.replaceSelection(selectedText + "#");
      }
      // If header is h6
      else if (/^#{6,}$/.test(selectedText)) {
        break;
      } else {
        editorState.replaceSelection("# " + selectedText);
      }
      editorState.focus();
      break;
    case "bold":
      editorState.replaceSelection("**" + (selectedText || " ") + "**");
      editorState.focus();
      break;
    case "italic":
      editorState.replaceSelection("*" + (selectedText || " ") + "*");
      editorState.focus();
      break;
    case "strikethrough":
      editorState.replaceSelection("~~" + (selectedText || " ") + "~~");
      editorState.focus();
      break;
    case "hr":
      editorState.setCursor(cursor.line + 1, 0);
      editorState.replaceSelection("\n\n---\n");
      editorState.focus();
      break;
    case (type.match(/h[1-6]{1}/) || {}).input:
      editorState.setCursor(cursor.line, 0);
      editorState.replaceSelection("#".repeat(Number(type[1])) + " ");
      editorState.focus();
      break;
    case "table":
      const sampleTable =
        "\n| Tables        | Are           | Cool  |\n" +
        "| ------------- |:-------------:| -----:|\n" +
        "| col 3 is      | right-aligned | $1600 |\n" +
        "| col 2 is      | centered      |   $12 |\n" +
        "| zebra stripes | are neat      |    $1 |\n";
      editorState.setCursor(cursor.line, 0);
      editorState.replaceSelection(sampleTable);
      editorState.focus();
      break;
    case "code":
      editorState.replaceSelection(
        `\n\`\`\`language\n${selectedText}\n\`\`\`\n`
      );
      editorState.focus();
      break;
    default:
      editorState.replaceSelection(selectedText);
  }
};

// https://stackoverflow.com/a/44661948/6781563
export const handleDownloadClick = ({ editorState, fileName }) => {
  const element = document.createElement("a");
  let markdownValue = "";
  if (!isEmpty(editorState)) {
    markdownValue = editorState.getValue();
  }
  const file = new Blob([markdownValue], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = fileName;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

// https://github.com/elfrog/apib-editor/blob/master/src/platform/web/app-service.js
export const handleUploadClick = async ({ event, handleNewFileUpload }) => {
  const fileSelector = document.createElement("input");
  fileSelector.type = "file";

  fileSelector.onchange = async e => {
    const file = e.target.files[0];
    let fileContent;
    try {
      fileContent = await readTextFile(file);
      handleNewFileUpload(fileContent);
    } catch (e) {
      console.error(e);
    }
  };

  event.preventDefault();
  fileSelector.click();
};

// TODO
// Create a custom hook
export const fetchAllRepositories = async ({
  client,
  setLoading,
  setData,
  query
}) => {
  let hasNextPage = true;
  let cursor = null;
  let allResults = null;

  while (hasNextPage) {
    const { data } = await client.query({
      query: query,
      variables: {
        cursor
      },
      fetchPolicy: "no-cache"
    });

    if (isEmpty(allResults)) {
      allResults = data;
    } else {
      allResults.viewer.repositories.pageInfo =
        data.viewer.repositories.pageInfo;
      allResults.viewer.repositories.nodes = [
        ...allResults.viewer.repositories.nodes,
        ...data.viewer.repositories.nodes
      ];
    }

    hasNextPage = data.viewer.repositories.pageInfo.hasNextPage;
    cursor = data.viewer.repositories.pageInfo.endCursor;
  }
  setLoading(false);
  setData(allResults);
};

// Not used anymore. Can be removed
export const findSolitudeRepository = data => {
  const solitudeGeneratedRepo = `{data.viewer.login}-solitude-notes`;
  const expectedRepo = data.viewer.repositories.nodes.find(
    repo => repo.name === solitudeGeneratedRepo
  );
  return expectedRepo;
};

export const calculateSolitudeRepoName = ownerName => {
  return `${ownerName}-solitude-notes`;
};

export const buildGitHubLink = clientId => {
  const gitHubLink = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;
  return gitHubLink;
};
