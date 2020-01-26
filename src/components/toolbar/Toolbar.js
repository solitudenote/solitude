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

const Toolbar = ({ onRichTextButtonClick, token }) => {
  return (
    <div className="toolbar">
      <ul>
        <li>
          <AiOutlineFontSize
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "header" })}
          />
        </li>
        <li>
          <AiOutlineBold
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "bold" })}
          />
        </li>
        <li>
          <AiOutlineItalic
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "italic" })}
          />
        </li>
        <li>
          <AiOutlineStrikethrough
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "strikethrough" })}
          />
        </li>
        <li>
          <AiOutlineMinus
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "hr" })}
          />
        </li>
        <li>
          <AiOutlineTable
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "table" })}
          />
        </li>
        <li>
          <AiOutlineCode
            width="22"
            height="22"
            onClick={() => onRichTextButtonClick({ type: "code" })}
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

//<li onClick={() => onRichTextButtonClick({ type: "h1" })}> H1 </li>
//<li onClick={() => onRichTextButtonClick({ type: "h2" })}> H2 </li>
//<li onClick={() => onRichTextButtonClick({ type: "h3" })}> H3 </li>
//<li onClick={() => onRichTextButtonClick({ type: "h4" })}> H4 </li>
//<li onClick={() => onRichTextButtonClick({ type: "h4" })}> H4 </li>
//<li>
//<AiOutlineOrderedList
//width="22"
//height="22"
//onClick={() => onRichTextButtonClick({ type: "ol" })}
///>
//</li>;
//
//<li>
//<AiOutlineUnorderedList
//width="22"
//height="22"
//onClick={() => onRichTextButtonClick({ type: "ul" })}
///>
//</li>
//
//<li>
//<AiOutlineUnderline
//width="22"
//height="22"
//onClick={() => onRichTextButtonClick({ type: "underline" })}
///>
//</li>;
//
//<li>
//<AiOutlineHighlight
//width="22"
//height="22"
//onClick={() => onRichTextButtonClick({ type: "highlight" })}
///>
//</li>
