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
  AiOutlineMinus
} from "react-icons/ai";

import { FaGithub } from "react-icons/fa";

import ListRepository from "../../shared/listRepository/ListRepository.js";
import config from "../../data/config.json";
import { handleRichTextButtonClick } from "../../utils/utils.js";

const Toolbar = ({ editorState, token }) => {
  return (
    <div className="toolbar">
      <ul>
        <li>
          <AiOutlineFontSize
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "header", editorState })
            }
          />
        </li>
        <li>
          <AiOutlineBold
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "bold", editorState })
            }
          />
        </li>
        <li>
          <AiOutlineItalic
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "italic", editorState })
            }
          />
        </li>
        <li>
          <AiOutlineStrikethrough
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "strikethrough", editorState })
            }
          />
        </li>
        <li>
          <AiOutlineMinus
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "hr", editorState })
            }
          />
        </li>
        <li>
          <AiOutlineTable
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "table", editorState })
            }
          />
        </li>
        <li>
          <AiOutlineCode
            width="22"
            height="22"
            onClick={() =>
              handleRichTextButtonClick({ type: "code", editorState })
            }
          />
        </li>
      </ul>
      <ul>
        <li>
          <a
            // TODO
            // Replace later with a different component
            href={`https://github.com/login/oauth/authorize?client_id=${config.GITHUB_APP_CLIENT_ID}&scope=repo`}
            //href={`https://github.com/login/oauth/authorize?client_id=${config.GITHUB_APP_CLIENT_ID}&scope=repo&redirect_uri=${config.GITHUB_APP_REDIRECT_URI}`}
          >
            <FaGithub width="22" height="20" />
            {token && (
              <>
                {" "}
                (<ListRepository />)
              </>
            )}
          </a>
        </li>
        <li>
          <AiOutlineSave width="22" height="22" />
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;

//<li onClick={() => handleRichTextButtonClick({ type: "h1", editorState })}> H1 </li>
//<li onClick={() => handleRichTextButtonClick({ type: "h2", editorState })}> H2 </li>
//<li onClick={() => handleRichTextButtonClick({ type: "h3", editorState })}> H3 </li>
//<li onClick={() => handleRichTextButtonClick({ type: "h4", editorState })}> H4 </li>
//<li onClick={() => handleRichTextButtonClick({ type: "h4", editorState })}> H4 </li>
//<li>
//<AiOutlineOrderedList
//width="22"
//height="22"
//onClick={() => handleRichTextButtonClick({ type: "ol", editorState })}
///>
//</li>;
//
//<li>
//<AiOutlineUnorderedList
//width="22"
//height="22"
//onClick={() => handleRichTextButtonClick({ type: "ul", editorState })}
///>
//</li>
//
//<li>
//<AiOutlineUnderline
//width="22"
//height="22"
//onClick={() => handleRichTextButtonClick({ type: "underline", editorState })}
///>
//</li>;
//
//<li>
//<AiOutlineHighlight
//width="22"
//height="22"
//onClick={() => handleRichTextButtonClick({ type: "highlight", editorState })}
///>
//</li>
