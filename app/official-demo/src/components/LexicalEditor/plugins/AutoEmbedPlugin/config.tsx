import type { LexicalEditor } from 'lexical';
import { EmbedCOnfigName, IAutoEmbedConfig } from './types';

import { EmbedMatchResult } from '@lexical/react/LexicalAutoEmbedPlugin';
import { INSERT_FIGMA_COMMAND } from './Figma/FigmaPlugin';
import { INSERT_TWEET_COMMAND } from './Tweet/TwitterPlugin';
import { INSERT_YOUTUBE_COMMAND } from './Youtube/YouTubePlugin';

export const EmbedConfigMap: Record<EmbedCOnfigName, IAutoEmbedConfig> = {
  youtube: {
    contentName: 'Youtube Video',
    exampleUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    icon: <i className="icon youtube" />,
    insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
      editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
    },
    keywords: ['youtube', 'video'],
    parseUrl: async (url: string) => {
      const match = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
      const id = match ? (match?.[2].length === 11 ? match[2] : null) : null;
      if (id !== null) {
        return {
          id,
          url,
        };
      }
      return null;
    },
    type: 'youtube-video',
  },
  twitter: {
    contentName: 'X(Tweet)',
    exampleUrl: 'https://x.com/jack/status/20',
    icon: <i className="icon x" />,
    insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
      editor.dispatchCommand(INSERT_TWEET_COMMAND, result.id);
    },
    keywords: ['tweet', 'twitter', 'x'],
    parseUrl: (text: string) => {
      const match = /^https:\/\/(twitter|x)\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)/.exec(text);
      if (match !== null) {
        return {
          id: match[5],
          url: match[1],
        };
      }
      return null;
    },
    type: 'tweet',
  },
  figma: {
    contentName: 'Figma Document',
    exampleUrl: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    icon: <i className="icon figma" />,
    insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
      editor.dispatchCommand(INSERT_FIGMA_COMMAND, result.id);
    },
    keywords: ['figma', 'figma.com', 'mock-up'],
    parseUrl: (text: string) => {
      const match =
        /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.exec(text);
      if (match !== null) {
        return {
          id: match[3],
          url: match[0],
        };
      }
      return null;
    },
    type: 'figma',
  },
};

export const EmbedConfigs = [
  EmbedConfigMap['youtube'],
  EmbedConfigMap['twitter'],
  EmbedConfigMap['figma'],
];
