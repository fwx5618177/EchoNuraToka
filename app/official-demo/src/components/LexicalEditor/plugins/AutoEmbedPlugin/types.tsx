import { EmbedConfig } from '@lexical/react/LexicalAutoEmbedPlugin';

export type EmbedCOnfigName = 'youtube' | 'twitter' | 'figma';

export interface IAutoEmbedConfig extends EmbedConfig {
  // 嵌入内容的人类可读名称 e.g. Tweet or Google Map.
  contentName: string;

  // 显示图标
  icon?: JSX.Element;

  // 一个匹配的url示例 https://twitter.com/jack/status/20
  exampleUrl: string;

  // 用于额外搜索
  keywords: Array<string>;

  // 嵌入项目
  description?: string;
}
