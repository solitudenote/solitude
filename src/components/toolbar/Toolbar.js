import React from "react";
import {
  AiOutlineBold,
  AiOutlineCode,
  AiOutlineItalic,
  AiOutlineGithub,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiOutlineSave,
  AiOutlineHighlight,
  AiOutlineTable,
  AiOutlineFontSize,
  AiOutlineMinus,
  AiOutlineFolderOpen
} from "react-icons/ai";

import { FaGithub } from "react-icons/fa";
import { GoGithubAction } from "react-icons/go";

import GitHubUser from "../../components/gitHubUser/GitHubUser.js";
import config from "../../data/config.json";
import {
  handleRichTextButtonClick,
  handleDownloadClick,
  handleUploadClick
} from "../../utils/utils.js";

import CustomModal from "../../shared/customModal/CustomModal.js";

const Toolbar = ({
  editorState,
  token,
  handleNewFileUpload,
  handleModalOpen
}) => {
  return (
    <div className="toolbar">
      <ul>
        <li
          onClick={() =>
            handleRichTextButtonClick({ type: "header", editorState })
          }
        >
          <AiOutlineFontSize width="22" height="22" />
        </li>
        <li
          onClick={() =>
            handleRichTextButtonClick({ type: "bold", editorState })
          }
        >
          <AiOutlineBold width="22" height="22" />
        </li>
        <li
          onClick={() =>
            handleRichTextButtonClick({ type: "italic", editorState })
          }
        >
          <AiOutlineItalic width="22" height="22" />
        </li>
        <li
          onClick={() =>
            handleRichTextButtonClick({ type: "strikethrough", editorState })
          }
        >
          <AiOutlineStrikethrough width="22" height="22" />
        </li>
        <li
          onClick={() => handleRichTextButtonClick({ type: "hr", editorState })}
        >
          <AiOutlineMinus width="22" height="22" />
        </li>
        <li
          onClick={() =>
            handleRichTextButtonClick({ type: "table", editorState })
          }
        >
          <AiOutlineTable width="22" height="22" />
        </li>
        <li
          onClick={() =>
            handleRichTextButtonClick({ type: "code", editorState })
          }
        >
          <AiOutlineCode width="22" height="22" />
        </li>
      </ul>
      <ul>
        {!token ? (
          <li>
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${config.GITHUB_APP_CLIENT_ID}&scope=repo`}
            >
              <FaGithub width="22" height="20" />
            </a>
          </li>
        ) : (
          <>
            <li onClick={() => handleModalOpen({ modalType: "GIT_MODAL" })}>
              <GoGithubAction width="22" height="20" />
            </li>
          </>
        )}
        <li
          onClick={event =>
            handleUploadClick({ event: event, handleNewFileUpload })
          }
        >
          <AiOutlineFolderOpen width="22" height="22" />
        </li>
        <li
          onClick={() =>
            // Change filename later
            handleDownloadClick({ fileName: "solitude.md", editorState })
          }
        >
          <AiOutlineSave width="22" height="22" />
        </li>
        {token && (
          <li>
            <GitHubUser />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Toolbar;
