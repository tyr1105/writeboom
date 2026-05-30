export type Platform = "xiaohongshu" | "douyin" | "weibo" | "bilibili";

export interface PlatformConfig {
  name: string;
  icon: string;
  color: string;
  promptTemplate: string;
}

export const platforms: Record<Platform, PlatformConfig> = {
  xiaohongshu: {
    name: "小红书",
    icon: "📕",
    color: "#ff2442",
    promptTemplate: `你是一个小红书爆款文案专家。根据用户提供的主题，生成一篇小红书爆款笔记文案。

要求：
1. 标题要有吸引力，使用数字、emoji、悬念、反差等技巧
2. 正文分段清晰，每段2-3行
3. 大量使用emoji增加可读性
4. 包含3-5个热门话题标签
5. 语气亲切自然，像朋友分享经验
6. 结尾要有互动引导（提问/求赞/收藏提醒）
7. 字数控制在300-600字

用户主题：{topic}

请生成3个不同风格的文案供选择。每个文案格式：
【标题】...
【正文】...
【标签】#标签1 #标签2 #标签3`,
  },
  douyin: {
    name: "抖音",
    icon: "🎵",
    color: "#000000",
    promptTemplate: `你是一个抖音爆款文案专家。根据用户提供的主题，生成5条短视频文案。

要求：
1. 每条文案包含：标题（20字内）+ 视频描述（50字内）
2. 标题要有强烈情绪/悬念/反差
3. 描述简洁有力，引发互动
4. 包含3个热门话题标签
5. 适合15-60秒短视频

用户主题：{topic}

请生成5条不同角度的文案。格式：
【标题】...
【描述】...
【标签】#标签1 #标签2 #标签3`,
  },
  weibo: {
    name: "微博",
    icon: "🔥",
    color: "#ff8200",
    promptTemplate: `你是一个微博文案专家。根据用户提供的主题，生成3条微博文案。

要求：
1. 每条140字以内，简洁有力
2. 观点鲜明，引发讨论
3. 包含1-2个热门话题标签
4. 适合转发/评论互动
5. 语气可以犀利/幽默/温暖

用户主题：{topic}

请生成3条不同风格的微博文案。`,
  },
  bilibili: {
    name: "B站",
    icon: "📺",
    color: "#00a1d6",
    promptTemplate: `你是一个B站内容文案专家。根据用户提供的主题，生成3个视频方案。

要求：
1. 包含：视频标题 + 简介 + 封面文字建议
2. 标题要有B站特色（适合弹幕文化）
3. 简介包含视频亮点和时间线
4. 标签3-5个
5. 适合5-15分钟中长视频

用户主题：{topic}

格式：
【标题】...
【简介】...
【封面建议】...
【标签】标签1 标签2 标签3`,
  },
};

export function buildPrompt(platform: Platform, topic: string): string {
  const config = platforms[platform];
  return config.promptTemplate.replace("{topic}", topic);
}
