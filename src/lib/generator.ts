// 客户端文案生成引擎
// 基于 爆款模板 + 随机组合，无需 API 调用

export type Platform = "xiaohongshu" | "douyin" | "weibo" | "bilibili";

// 爆款标题模板库
const xhsTitles = [
  "{topic} | {adj}必看！{emoji}",
  "关于{topic}，我终于{achievement}了{emoji}",
  "{topic}{result}，这个方法{evaluation}！",
  "姐妹们！{topic}{result}的秘密被我发现了{emoji}",
  "{topic}保姆级攻略，{guarantee}{emoji}",
  "做对了{topic}，{benefit}！{emoji}",
  "{topic} | {duration}从{from}到{to}{emoji}",
  "后悔没早点知道！{topic}{evaluation}方法{emoji}",
];

const douyinTitles = [
  "{topic}，我悟了！",
  "别再瞎做{topic}了！",
  "{topic}前 vs {topic}后",
  "99%的人{topic}都做错了",
  "月薪3k到月入过万，{topic}改变了我",
  "{topic}的正确打开方式",
  "关于{topic}，我花了一年才搞明白",
  "{topic}的真相，不想你走弯路",
];

const adjs = ["新手", "姐妹", "打工人", "所有人"];
const emojis = ["🔥", "✨", "💡", "📌", "💪", "🎯", "🌟", "❤️"];
const achievements = ["搞明白了", "成功了", "上岸了", "找到窍门了"];
const results = ["效果绝了", "亲测有效", "变化太大", "终于成功了"];
const evaluations = ["太好用了", "绝了", "真的牛", "亲测好用"];
const guarantees = ["看完直接上手", "有手就行", "保证学会"];
const benefits = ["人生开挂了", "生活质量直线上升", "效率翻倍", "再也不用愁了"];
const froms = ["零基础", "小白", "迷茫", "一窍不通"];
const tos = ["精通", "大神", "逆袭", "彻底搞懂"];
const durations = ["30天", "3个月", "半年", "一年"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillTemplate(template: string, topic: string): string {
  return template
    .replace("{topic}", topic)
    .replace("{adj}", pick(adjs))
    .replace("{emoji}", pick(emojis))
    .replace("{achievement}", pick(achievements))
    .replace("{result}", pick(results))
    .replace("{evaluation}", pick(evaluations))
    .replace("{guarantee}", pick(guarantees))
    .replace("{benefit}", pick(benefits))
    .replace("{from}", pick(froms))
    .replace("{to}", pick(tos))
    .replace("{duration}", pick(durations));
}

function pickN<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export function generateXiaohongshu(topic: string): string {
  const titles = pickN(xhsTitles, 3).map((t) => fillTemplate(t, topic));

  return `${titles.map((title, i) => {
    const styles = [
      `亲切分享风`,
      `干货教程风`,
      `故事经历风`,
    ];
    const tones = [
      `姐妹们！今天必须跟你们分享关于「${topic}」的干货 ✨

📌 先说结论：真的${pick(evaluations)}！

之前踩了无数坑，终于找到了最有效的方法👇

1️⃣ 第一步：做好功课
不要盲目跟风，先了解清楚再行动

2️⃣ 第二步：制定计划
根据自己的实际情况来调整

3️⃣ 第三步：坚持执行
三天打鱼两天晒网是不行的！

4️⃣ 第四步：记录变化
看到进步才有动力继续

💡 小tips：坚持一个月你会看到明显变化～

如果觉得有用的话记得点赞收藏 ❤️ 有问题评论区问我！`,
      `答应你们的${topic}攻略终于来了！

先收藏再看，不然后面找不到啦 📌

🔧 准备阶段：
- 心态放平，不要急
- 准备好必要的工具/资料
- 给自己定个小目标

🚀 执行阶段：
Day 1-7：养成习惯
Day 8-15：找到节奏
Day 16-30：看到明显变化

⚠️ 注意事项：
- 不要和别人比较
- 遇到困难很正常
- 及时调整策略

最后想说的是：${topic}这件事，最难的是开始
但只要开始了，你就已经超过80%的人了 💪

有问题评论区见，看到都会回～`,
      `说实话，关于${topic}这件事我纠结了好久 🥲

但真正开始之后才发现...原来没那么难！

分享一下我的真实经历 📝

之前看了无数攻略，越看越焦虑
总觉得要准备完美了再开始
后来发现，最简单的才是最有效的

我的经验：
✅ 先从最小的一步开始
✅ 不要追求完美
✅ 每天进步一点点就够
✅ 找到同频的伙伴互相鼓励

到现在${pick(evaluations)}，回过头看
其实最大的敌人就是「想太多」

别再犹豫了，今天就行动起来吧！
有任何问题随时问我 💬`,
    ];
    return `【文案${i + 1}】${styles[i]}

【标题】${title}

【正文】
${tones[i]}

【标签】#${topic} #干货分享 #实用技巧 #生活日常 #${pick(evaluations)}`;
  }).join("\n\n---\n\n")}

---

💡 提示：以上文案可自由组合修改，选出最适合你风格的那条！`;
}

export function generateDouyin(topic: string): string {
  return `${pickN(douyinTitles, 5)
    .map((t, i) => {
      const descriptions = [
        `踩了无数坑总结出来的经验，最后一点最关键`,
        `真实经历分享，希望能帮到你们少走弯路`,
        `坚持了30天的变化，连我自己都不敢信`,
        `答应我看完这个视频，你就知道该怎么做了`,
        `90%的人都不知道的正确方法`,
      ];
      return `【文案${i + 1}】

【标题】${fillTemplate(t, topic)}

【描述】${descriptions[i]}

【标签】#${topic} #${pick(evaluations)} #${pick(["干货", "必看", "实用", "涨知识", "经验分享"])}`;
    })
    .join("\n\n---\n\n")}

---

💡 提示：选一个最适合你视频风格的文案，可以适当加入个人特色！`;
}

export function generateWeibo(topic: string): string {
  const templates = [
    `关于${topic}，说几个大多数人不知道的真相：
1. 网上80%的攻略都是复制粘贴
2. 最有效的方法往往最简单
3. 坚持>方法>天赋
别再焦虑了，先行动起来。#${topic} #观点`,
    `终于把${topic}搞明白了，感觉之前浪费了好多时间...
其实核心就一句话：别想太多，先做再说。
有同感吗？#${topic}`,
    `今天${topic}有个新发现：原来最难的不是开始，
而是坚持到看到效果的那一天。
给自己打个气，也给所有在路上的你 💪 #${topic} #坚持`,
  ];
  return templates.join("\n\n---\n\n");
}

export function generateBilibili(topic: string): string {
  return `【文案一】

【标题】${topic}全攻略｜从零开始到彻底搞懂

【简介】
这期视频把${topic}从头到尾讲清楚！
⏰ 00:00 为什么要了解${topic}
⏰ 03:20 基础概念讲解
⏰ 08:45 实操演示
⏰ 15:30 常见问题解答
⏰ 20:00 总结和建议

如果觉得有帮助请三连支持！有问题弹幕/评论区见～

【封面建议】${topic}全攻略 / 一看就懂 / 配合箭头效果

【标签】${topic} 教程 入门指南 科普

---

【文案二】

【标题】关于${topic}，我花了一年时间才搞明白的事

【简介】
踩了无数坑总结出来的经验，不想你们再走弯路了

⏰ 00:00 我为什么要做${topic}
⏰ 02:30 前期准备
⏰ 06:00 实际操作
⏰ 12:00 效果展示
⏰ 16:30 新手避坑

这期比较长但全是干货，建议先收藏再看！

【封面建议】一年经验总结 / 字要大 / 用感叹号

【标签】${topic} 经验分享 UP主日常

---

【文案三】

【标题】【${topic}】最新版！手把手教你从零开始

【简介】
这个领域变化太快了，重新录了一版最新的${topic}教程

⏰ 00:00 有什么新变化
⏰ 04:00 新手最常犯的3个错误
⏰ 10:00 正确操作流程
⏰ 18:00 效果对比&总结

弹幕告诉我你们最想了解哪个方面！

【封面建议】最新版 / 手把手 / 醒目数字

【标签】${topic} 最新教程 新手 手把手

---

💡 提示：B站内容偏长视频，建议搭配弹幕互动环节增加活跃度！`;
}

export function generate(platform: Platform, topic: string): string {
  switch (platform) {
    case "xiaohongshu":
      return generateXiaohongshu(topic);
    case "douyin":
      return generateDouyin(topic);
    case "weibo":
      return generateWeibo(topic);
    case "bilibili":
      return generateBilibili(topic);
    default:
      return generateXiaohongshu(topic);
  }
}
