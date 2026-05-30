(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,73855,18035,e=>{"use strict";let t=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();e.s(["mergeClasses",0,t],73855);var r=e.i(27540),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,r.createContext)({}),i=(0,r.forwardRef)(({color:e,size:i,strokeWidth:o,absoluteStrokeWidth:l,className:n="",children:c,iconNode:d,...m},h)=>{let{size:x=24,strokeWidth:p=2,absoluteStrokeWidth:u=!1,color:g="currentColor",className:y=""}=(0,r.useContext)(s)??{},b=l??u?24*Number(o??p)/Number(i??x):o??p;return(0,r.createElement)("svg",{ref:h,...a,width:i??x??a.width,height:i??x??a.height,stroke:e??g,strokeWidth:b,className:t("lucide",y,n),...!c&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(m)&&{"aria-hidden":"true"},...m},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(c)?c:[c]])});e.s(["default",0,i],18035)},32255,76954,e=>{"use strict";var t=e.i(27540),r=e.i(73855);let a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var s=e.i(18035);let i=(e,i)=>{let o=(0,t.forwardRef)(({className:o,...l},n)=>(0,t.createElement)(s.default,{ref:n,iconNode:i,className:(0,r.mergeClasses)(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...l}));return o.displayName=a(e),o};e.s(["default",0,i],76954);let o=i("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",0,o],32255)},76641,e=>{"use strict";var t=e.i(74997),r=e.i(27540),a=e.i(32255),s=e.i(76954);let i=(0,s.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),o=(0,s.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["default",0,function(){let[e,s]=(0,r.useState)(!1);return(0,t.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100",children:[(0,t.jsxs)("div",{className:"max-w-6xl mx-auto px-4 h-16 flex items-center justify-between",children:[(0,t.jsxs)("a",{href:"#",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center",children:(0,t.jsx)(a.Sparkles,{className:"w-5 h-5 text-white"})}),(0,t.jsx)("span",{className:"text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent",children:"WriteBoom"})]}),(0,t.jsxs)("nav",{className:"hidden md:flex items-center gap-6 text-sm text-gray-600",children:[(0,t.jsx)("a",{href:"#tool",className:"hover:text-orange-500 transition-colors",children:"开始创作"}),(0,t.jsx)("a",{href:"#features",className:"hover:text-orange-500 transition-colors",children:"功能特色"}),(0,t.jsx)("a",{href:"#pricing",className:"hover:text-orange-500 transition-colors",children:"定价方案"})]}),(0,t.jsx)("button",{className:"md:hidden p-2",onClick:()=>s(!e),children:e?(0,t.jsx)(o,{className:"w-5 h-5"}):(0,t.jsx)(i,{className:"w-5 h-5"})})]}),e&&(0,t.jsxs)("div",{className:"md:hidden bg-white border-b border-gray-100 px-4 py-3 space-y-2 text-sm",children:[(0,t.jsx)("a",{href:"#tool",className:"block py-2 text-gray-600 hover:text-orange-500",onClick:()=>s(!1),children:"开始创作"}),(0,t.jsx)("a",{href:"#features",className:"block py-2 text-gray-600 hover:text-orange-500",onClick:()=>s(!1),children:"功能特色"}),(0,t.jsx)("a",{href:"#pricing",className:"block py-2 text-gray-600 hover:text-orange-500",onClick:()=>s(!1),children:"定价方案"})]})]})}],76641)},97406,e=>{"use strict";var t=e.i(74997),r=e.i(27540),a=e.i(32255),s=e.i(76954);let i=(0,s.default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),o=(0,s.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),l=(0,s.default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),n=["{topic} | {adj}必看！{emoji}","关于{topic}，我终于{achievement}了{emoji}","{topic}{result}，这个方法{evaluation}！","姐妹们！{topic}{result}的秘密被我发现了{emoji}","{topic}保姆级攻略，{guarantee}{emoji}","做对了{topic}，{benefit}！{emoji}","{topic} | {duration}从{from}到{to}{emoji}","后悔没早点知道！{topic}{evaluation}方法{emoji}"],c=["{topic}，我悟了！","别再瞎做{topic}了！","{topic}前 vs {topic}后","99%的人{topic}都做错了","月薪3k到月入过万，{topic}改变了我","{topic}的正确打开方式","关于{topic}，我花了一年才搞明白","{topic}的真相，不想你走弯路"],d=["新手","姐妹","打工人","所有人"],m=["🔥","✨","💡","📌","💪","🎯","🌟","❤️"],h=["搞明白了","成功了","上岸了","找到窍门了"],x=["效果绝了","亲测有效","变化太大","终于成功了"],p=["太好用了","绝了","真的牛","亲测好用"],u=["看完直接上手","有手就行","保证学会"],g=["人生开挂了","生活质量直线上升","效率翻倍","再也不用愁了"],y=["零基础","小白","迷茫","一窍不通"],b=["精通","大神","逆袭","彻底搞懂"],f=["30天","3个月","半年","一年"];function j(e){return e[Math.floor(Math.random()*e.length)]}function k(e,t){return e.replace("{topic}",t).replace("{adj}",j(d)).replace("{emoji}",j(m)).replace("{achievement}",j(h)).replace("{result}",j(x)).replace("{evaluation}",j(p)).replace("{guarantee}",j(u)).replace("{benefit}",j(g)).replace("{from}",j(y)).replace("{to}",j(b)).replace("{duration}",j(f))}function v(e,t){return[...e].sort(()=>Math.random()-.5).slice(0,t)}function w(e,t){switch(e){case"xiaohongshu":default:let r;return r=v(n,3).map(e=>k(e,t)),`${r.map((e,r)=>{let a=[`姐妹们！今天必须跟你们分享关于「${t}」的干货 ✨

📌 先说结论：真的${j(p)}！

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

如果觉得有用的话记得点赞收藏 ❤️ 有问题评论区问我！`,`答应你们的${t}攻略终于来了！

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

最后想说的是：${t}这件事，最难的是开始
但只要开始了，你就已经超过80%的人了 💪

有问题评论区见，看到都会回～`,`说实话，关于${t}这件事我纠结了好久 🥲

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

到现在${j(p)}，回过头看
其实最大的敌人就是「想太多」

别再犹豫了，今天就行动起来吧！
有任何问题随时问我 💬`];return`【文案${r+1}】${["亲切分享风","干货教程风","故事经历风"][r]}

【标题】${e}

【正文】
${a[r]}

【标签】#${t} #干货分享 #实用技巧 #生活日常 #${j(p)}`}).join("\n\n---\n\n")}

---

💡 提示：以上文案可自由组合修改，选出最适合你风格的那条！`;case"douyin":return`${v(c,5).map((e,r)=>`【文案${r+1}】

【标题】${k(e,t)}

【描述】${["踩了无数坑总结出来的经验，最后一点最关键","真实经历分享，希望能帮到你们少走弯路","坚持了30天的变化，连我自己都不敢信","答应我看完这个视频，你就知道该怎么做了","90%的人都不知道的正确方法"][r]}

【标签】#${t} #${j(p)} #${j(["干货","必看","实用","涨知识","经验分享"])}`).join("\n\n---\n\n")}

---

💡 提示：选一个最适合你视频风格的文案，可以适当加入个人特色！`;case"weibo":return`关于${t}，说几个大多数人不知道的真相：
1. 网上80%的攻略都是复制粘贴
2. 最有效的方法往往最简单
3. 坚持>方法>天赋
别再焦虑了，先行动起来。#${t} #观点

---

终于把${t}搞明白了，感觉之前浪费了好多时间...
其实核心就一句话：别想太多，先做再说。
有同感吗？#${t}

---

今天${t}有个新发现：原来最难的不是开始，
而是坚持到看到效果的那一天。
给自己打个气，也给所有在路上的你 💪 #${t} #坚持`;case"bilibili":return`【文案一】

【标题】${t}全攻略｜从零开始到彻底搞懂

【简介】
这期视频把${t}从头到尾讲清楚！
⏰ 00:00 为什么要了解${t}
⏰ 03:20 基础概念讲解
⏰ 08:45 实操演示
⏰ 15:30 常见问题解答
⏰ 20:00 总结和建议

如果觉得有帮助请三连支持！有问题弹幕/评论区见～

【封面建议】${t}全攻略 / 一看就懂 / 配合箭头效果

【标签】${t} 教程 入门指南 科普

---

【文案二】

【标题】关于${t}，我花了一年时间才搞明白的事

【简介】
踩了无数坑总结出来的经验，不想你们再走弯路了

⏰ 00:00 我为什么要做${t}
⏰ 02:30 前期准备
⏰ 06:00 实际操作
⏰ 12:00 效果展示
⏰ 16:30 新手避坑

这期比较长但全是干货，建议先收藏再看！

【封面建议】一年经验总结 / 字要大 / 用感叹号

【标签】${t} 经验分享 UP主日常

---

【文案三】

【标题】【${t}】最新版！手把手教你从零开始

【简介】
这个领域变化太快了，重新录了一版最新的${t}教程

⏰ 00:00 有什么新变化
⏰ 04:00 新手最常犯的3个错误
⏰ 10:00 正确操作流程
⏰ 18:00 效果对比&总结

弹幕告诉我你们最想了解哪个方面！

【封面建议】最新版 / 手把手 / 醒目数字

【标签】${t} 最新教程 新手 手把手

---

💡 提示：B站内容偏长视频，建议搭配弹幕互动环节增加活跃度！`}}let N=[{key:"xiaohongshu",name:"小红书",icon:"📕"},{key:"douyin",name:"抖音",icon:"🎵"},{key:"weibo",name:"微博",icon:"🔥"},{key:"bilibili",name:"B站",icon:"📺"}],$=["健身减脂","独居好物分享","职场新人避坑","平价护肤推荐","考研上岸经验","穿搭ootd","美食探店","副业赚钱"];e.s(["default",0,function(){let[e,s]=(0,r.useState)("xiaohongshu"),[n,c]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[h,x]=(0,r.useState)(!1),[p,u]=(0,r.useState)(!1),[g,y]=(0,r.useState)(0),b=async()=>{if(d)try{await navigator.clipboard.writeText(d),u(!0),setTimeout(()=>u(!1),2e3)}catch{let e=document.createElement("textarea");e.value=d,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),u(!0),setTimeout(()=>u(!1),2e3)}};return(0,t.jsx)("section",{id:"tool",className:"py-16 px-4",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsx)("h2",{className:"text-3xl font-bold text-center mb-2",children:"开始创作"}),(0,t.jsx)("p",{className:"text-center text-gray-500 mb-8",children:"选择平台，输入主题，秒出爆款文案"}),(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100/50 p-6 md:p-8",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"① 选择平台"}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:N.map(r=>(0,t.jsxs)("button",{onClick:()=>{s(r.key),m("")},className:`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all text-sm font-medium cursor-pointer ${e===r.key?"border-orange-400 bg-orange-50 text-orange-600 shadow-sm":"border-gray-200 bg-white text-gray-600 hover:border-gray-300"}`,children:[(0,t.jsx)("span",{className:"text-lg",children:r.icon}),r.name]},r.key))})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"② 输入你的主题"}),(0,t.jsx)("textarea",{value:n,onChange:e=>c(e.target.value),placeholder:"比如：减脂期便当分享 / 28岁转行程序员 / 大理旅行攻略...",rows:3,className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none resize-none text-gray-800 placeholder-gray-400"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mt-3",children:$.map(e=>(0,t.jsx)("button",{onClick:()=>c(e),className:"px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer",children:e},e))})]}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)("button",{onClick:()=>{n.trim()&&(x(!0),setTimeout(()=>{m(w(e,n.trim())),y(e=>e+1),x(!1)},800))},disabled:h||!n.trim(),className:"flex-1 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg cursor-pointer",children:[(0,t.jsx)(a.Sparkles,{className:"w-5 h-5"}),d?"重新生成":"生成爆款文案"]}),d&&(0,t.jsx)("button",{onClick:()=>{n.trim()&&(x(!0),setTimeout(()=>{m(w(e,n.trim())),y(e=>e+1),x(!1)},500))},disabled:h,className:"py-3.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50",title:"换一版",children:(0,t.jsx)(l,{className:`w-5 h-5 text-gray-500 ${h?"animate-spin":""}`})})]}),(0,t.jsxs)("p",{className:"text-center text-xs text-gray-400 mt-3",children:["已生成 ",g," 次 · 免费无限次使用"]}),d&&(0,t.jsxs)("div",{className:"mt-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,t.jsxs)("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-lg",children:N.find(t=>t.key===e)?.icon}),N.find(t=>t.key===e)?.name," 爆款文案"]}),(0,t.jsx)("button",{onClick:b,className:"flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer",children:p?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{className:"w-4 h-4 text-green-500"})," 已复制"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{className:"w-4 h-4"})," 复制全部"]})})]}),(0,t.jsx)("div",{className:"bg-gray-50 rounded-xl p-5 text-gray-700 whitespace-pre-wrap leading-relaxed border border-gray-100 text-sm",children:d})]})]})]})})}],97406)}]);