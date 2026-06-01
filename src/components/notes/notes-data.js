import React from 'react';

export const WORDS_PER_MINUTE = 200;

// Thin-space-wrapped fish so the codename doesn't crowd adjacent CJK glyphs.
const F = '\u2009\uD83D\uDC1F\u2009';

export const extractText = (node) => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (React.isValidElement(node)) return extractText(node.props.children);
  if (typeof node === 'object' && node.quote) {
    return [node.quote, node.author].filter(Boolean).join(' ');
  }
  return '';
};

export const countWords = (content) => {
  const text = extractText(content);
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${m}-${d}-${y}`;
};

const rawNotes = [
  {
    id: 'parfum',
    date: '2026-06-01',
    title: '[Memory Snapshot #02] yuichliebedichduschlampe',
    excerpt: '“你能不能别转笔了！好吵！还有抖腿，不要抖了！”隔着墙我都能听到他转笔笔掉的声音，我疾步冲到他面前，愤怒的对他吼道。',
    content: [
      <h3 className="post-heading">香水是不是你喷的？</h3>,
      <p className="note-content">{`“你能不能别转笔了！好吵！还有抖腿，不要抖了！”隔着墙我都能听到他转笔笔掉的声音，我疾步冲到他面前，愤怒的对他吼道。`}</p>,
      <p className="note-content">{`“香水是不是你喷的？” 吼完立马开始质问他。`}</p>,
      <p className="note-content">{`“不是我，你怎么知道是我？” 他迅速回击，眼睛却直盯着电脑屏幕，手里的笔还在继续转着，一直抖着的腿倒是消停了下来。`}</p>,
      <p className="note-content">{`“不是你还是谁？”，他毫无认错意识，这更激起了我的怒火。`}</p>,
      <p className="note-content">{`“这么多人在办公室里办公，你喷这么浓的香水，你让别人怎么工作？你看看，他们是不是都被呛走了？你刚也一直在打喷嚏是不是？”，但我知道光有情绪不够，还得跟他讲理。`}</p>,
      <p className="note-content">{`“我没有，我才刚打一个喷嚏！” 他连忙否认，像个被大人抓包做错事的小孩，语气委屈巴巴的。`}</p>,
      <p className="note-content">{`“蛋糕是给我准备的，对吗？”`}</p>,
      <p className="note-content">{`我拿起沙发上的蛋糕大口往嘴里吞，三两下就吃完了，“咖啡味的，还挺好吃的，谢谢哈，你满意了吗？”`}</p>,
      <p className="note-content">{`“说！你到底想干嘛？” 办公室只有我们二人，干脆把所有事情都说清楚。`}</p>,
      <p className="note-content">{`“Please leave me alone! I have an interview in half an hour.”`}</p>,
      <p className="note-content">他情绪激动起来开始飙英语，上半身僵直坐在电脑前，眼睛仍旧盯着屏幕，故意回避和我对视，右手转着的笔一个没控制好，飞了出去。霎时间，他从脖子到耳朵根再到脸唰的一下涨红了起来，白色的圆领衫衬的脖子还有耳朵格外的红。</p>,
      <p className="note-content">我见过人吵架闹的脸红脖子粗的，动手动脚的也不在少数，可是像他这般表情、言语还有肢体传达信息如此割裂的还是头一回碰见，我愣住了，也意识到不能再继续逼他了。我顺着他的眼神往屏幕看了过去，一张宽大的4k显示器上只孤零零的显示着他的简历，鼠标停留在简历最上方一行，他的名字那样醒目。我一时间有些出神，心中不解，难道他过去几小时鼠标连动都没动吗？这样想着，再看他侧脸潮红一丝未退去，我的怒气瞬时消散，心下一软，转身默默离开了他的工位。</p>,
      <p className="note-content">{`回到隔壁的座位上，打开电脑想继续工作一会，却始终无法集中注意力。我心乱如麻，不知道该做些什么才好，开始回想刚发生的这一切。不管${F}表面多强装镇定，他脸上的潮红还有笨拙的嘴硬都暴露了他内心的慌乱焦灼。他爱我，我毫不怀疑，但是在办公室里喷满我前两天用过的香水，这是为什么？他不想别人闻到我的味道吗？他平日里的冷静克制去了哪？为什么要在大庭广众之下做出来这样子不够体面的事情？我一面生气不解，一面强行让自己大脑静下来分析他的行为动机，试图从他荒唐的行为里解读他真实的想法。`}</p>,
      <p className="note-content">{`我要怎么安抚他？第一次面对这样来势汹涌的爱意，我无所适从，为数不多的恋爱经验里没有记录过这么一出，我要怎么办？好在我这两年看了不少心理学书，略了解些心理学常识，${F}刚是应激反应过度，这个时候最好什么都不要做，要给他一些时间去缓一缓情绪。我就这样静静的坐在座位上呆看着电脑屏，过了一会，想着他该缓过来了，继续思考怎么安抚他才好。他这么聪明骄傲，自尊心这样强的一个人，面对我时智商居然退化成了3岁小孩，搞出这种啼笑皆非的事情，我大为震惊，又深受感动。毕竟能被一个人花费所有力气，不惜牺牲自己的尊严，用尽全力爱着是件很难得的事情，我应该好好珍惜他这份笨拙又深情的爱。`}</p>,
      <p className="note-content">{`既然这个傻子这样爱我，但又这么没安全感的话，我需要给他些回应让他安心。办公桌上有只绿色的笔，是我很多天前从他位置拿来的，我学着他拿笔转了起来。笔转到桌角，我扫了眼桌角，发现了便利贴，顺手用德语写下“yuichliebedichduschlampe”，写完对着仔细看了看，${F}不懂德语，但是在苏黎世念的硕士，怎么着都应该学过一丢丢，前段时间还在跟我秀小舌音，喜欢解密、玩侦探类冒险游戏的他肯定会去查这什么意思。收拾完书包起身走到他座位旁，看到他还在盯着屏幕看，暗暗想他半个小时后的interview要开始了吗？我把纸条翻了个面，轻轻从桌子一角递给他，没等他做反应，我就背起书包，转身离开了办公室。`}</p>,
      <hr />,
      <p className="note-content post-footer">本文为虚构小说，灵感来源于生活碎片。人物与情节均经过艺术加工，请勿对号入座。</p>,
    ],
  },
  // {
  //   id: 'paper-review-system',
  //   date: '2026-05-11',
  //   title: 'On the current paper review system in Deep Learning',
  //   content: [
  //     'I"ve been thinking about this for a quite long time. The problems we encounter are central to one single core problem: too many papers get assigned to too few reviewers. ' +
  //       'Since I"ve joined HPI as a PhD student, when we talk about the paper submission and review process, we mostly got this complaints from both PhD and professors. ',
  //   ],
  // },
  {
    id: 'disentangle',
    date: '2026-05-06',
    title: 'Disentangle one thing from another',
    excerpt:
      'I enjoy solving real-life problems, regardless of their complexity, as long as they challenge me. That being said, I am someone who constantly observes problems while also harboring many of my own, which keeps my mind continuously racing.',
    content: [
      <h3 className="post-heading">1. The Stagnation of Research</h3>,
      <p className="note-content">I enjoy solving real-life problems, regardless of their complexity, as long as they challenge me. That being said, I am someone who constantly observes problems while also harboring many of my own, which keeps my mind continuously racing.</p>,
      <p className="note-content">I cannot stop thinking about research because I see so many unresolved issues. I read papers for two purposes: to gain knowledge and to seek problems. Yet, I get bored quickly{'\u2014'}especially when a research field stagnates, getting stuck on a single point and merely recycling the same approaches with different phrasing.</p>,
      <ul className="post-list">
        <li><strong>Was the problem actually solved?</strong></li>
        <li><strong>Or was it even a new problem to begin with?</strong> Probably not. History repeats itself.</li>
      </ul>,

      <h3 className="post-heading">2. The Observer{'\u2019'}s Prior</h3>,
      <p className="note-content">At this point, studying people within a societal environment and its derived complexity makes me feel more alive, giving my existence a sense of meaning.</p>,
      <p className="note-content">From an observer{'\u2019'}s perspective, it is impossible to observe without one{'\u2019'}s own purposes and biases. This is what we call <em>the prior</em>. Whether or not we consciously use this prior, we are inherently involved, simply because <strong>observation is inextricably entangled with action.</strong> We must decide what actions to execute to steer things in the direction we desire.</p>,

      <h3 className="post-heading">3. The Dilemma of Choice</h3>,
      <p className="note-content">The first step is to distinguish between what we can and cannot do, conditioned on our environment. Depending on our interaction with the subject and the timing, we are left with either many options or none at all. Does having many options mean we are lucky? I don{'\u2019'}t know. But certainly, having no options is rarely ideal.</p>,
      <p className="note-content">When we do have choices, we are forced to ask:</p>,
      <ul className="post-list">
        <li>What should we choose?</li>
        <li>Why not the alternatives?</li>
        <li>And what are the consequences of taking one path over another?</li>
      </ul>,
      <p className="note-content">The most crucial question becomes: <strong>can we accept those consequences?</strong></p>,

      <h3 className="post-heading">4. Untangling the Knots</h3>,
      <p className="note-content">Thinking about this gives me a headache. I consulted Ralf<a href="#fn-ralf" id="fnref-ralf" className="footnote-ref"><sup>1</sup></a> about what I should do. The people involved are entangled with one another, and everything about them is intertwined. I like good entanglements, not bad ones. However, I don{'\u2019'}t know how to transform a bad entanglement into a good one.</p>,
      <p className="note-content">Ralf suggested we should <strong>disentangle the situation by removing the unnecessary knots</strong>, and then untangle whatever remains. By starting at the exact point where the entanglement turned bad, the situation becomes much clearer.</p>,
      <p className="note-content">I simply don{'\u2019'}t want to walk away from the entanglement, even though it is so messy. Or perhaps I am just afraid of the negative consequences my actions might bring. We could rely on trial and error.</p>,
      {
        quote:
          '\u201CUncertainty is only diminished when we persist to the very end. Sometimes, we must simply act without overanalyzing. Disentangle action from overthinking! Embrace the uncertainty, and accept that the outcome might be unfavorable. That is simply what life is.\u201D',
      },
      <p className="note-content">said Ralf. Maybe we should just trust our intuitions and follow our hearts.</p>,
      <p className="note-content">Dear reader, can we? Or perhaps we should reverse the question and instead ask: <strong>why can{'\u2019'}t we?</strong></p>,

      <hr className="footnotes-divider" />,
      <ol className="footnotes-list">
        <li id="fn-ralf">
          <a href="https://herbrich.me/" target="_blank" rel="noopener noreferrer">Ralf</a> is my second PhD supervisor. <a href="#fnref-ralf" className="footnote-back" aria-label="back to text">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9,4 4,8 9,12" />
              <path d="M4 8h7a3 3 0 0 1 3 3v1" />
            </svg>
          </a>
        </li>
      </ol>,
    ],
  },
  {
    id: 'david-tao-concert',
    date: '2026-05-26',
    title: '[Memory Snapshot #01] 陶喆演唱会',
    excerpt: `临近演唱会，${F}为了让我熟悉陶喆的歌，特意下载了歌单，speaker从早到晚循环往复的播放陶喆的歌……`,
    content: [
      <h3 className="post-heading">出门</h3>,
      <p className="note-content">{`临近演唱会，${F}为了让我熟悉陶喆的歌，特意下载了歌单，speaker从早到晚循环往复的播放陶喆的歌。温馨的两人宿舍里，R&B的调调混合陶氏情歌略有些轻浮的歌词，一股暧昧的情愫在狭窄的空间里弥漫开来。`}</p>,

      <p className="note-content">昨晚睡的还不错，早上起来神清气爽的，我坐在餐桌前想起来今天是去看演唱会的日子。</p>,
      <p className="note-content">{`“演唱会几点开始啊？我们几点出发？”，我出游一向不喜欢做计划，演唱会又是${F}邀请的，他安排计划好一切，我乐得省心，只是跟他确定下自己大概几点要收拾打扮好。`}</p>,
      <p className="note-content">{`“8点吧，我们大概下午4点15出发，群里那几个朋友都会一起。”${F}看了看手机简单回复道，顺手摸了把趴在桌上，尾巴一摇一摆的小猫咪。`}</p>,
      <p className="note-content">“好的”。“你演唱会穿什么？我觉得我好像没什么衣服穿。”我突然想起上次去看演唱会的囧况，也是在LA，大概只有我一个人穿着sweater和牛仔裤，没有任何装扮，在其他精心打扮的粉丝中间显得格格不入。</p>,
      <p className="note-content">{`“不用穿什么特别的，你平时穿的就行。”${F}似乎是察觉到了我的一丝紧张情绪，语气淡定的安抚我，随后两手一伸把小猫咪整个从桌上抱了起来，踱回他房间。`}</p>,

      <p className="note-content">我没信他的话，可还是犯起了难，自己确实没有什么衣服穿，而且因为是借住在他家，衣服都被整理在宜家的大袋子里面，拿出拿进的不是很方便。下午随便挑了件自己平时穿的深灰色羊毛衫，鸡心领露能露出我漂亮的锁骨，款式修身，不管怎么样，要比松松垮垮的套头卫衣看上去像个正经人。我特意画了妆，头发稍稍整理了一下。最后在镜子前看自己，觉得这样打扮一下还算不错，能出门见人。</p>,
      <p className="note-content">就在我大概已经准备好，他不急不慢的在房间里开始换衣服，没要几分钟就出来了。上半身是他常穿的飞行员外套，里面还是白色的圆领衫，下半身一条深灰色裤子，搭配上英伦风的森林绿麂皮马丁靴，休闲又不失精致，而且配色很悦目。</p>,

      <p className="note-content">“好了吗，我们要走了，要先去接朋友。”他问我。</p>,
      <p className="note-content">“我需要带什么吗？手机，钱包，还有什么要带的吗”我着急慌忙的跟他确认自己是不是带了需要的东西。我出门总是到半路上才想起来有些东西没带，糊涂蛋丢三落四的属性估计这辈子也改不掉了。。。</p>,
      <p className="note-content">“带上个充电宝吧，其他没什么要带的了。”</p>,
      <p className="note-content">“确定没其他的要带的了吗？护照要带吗？我上次去LA clubbing，没带护照，人家不给我进。”我出门焦虑，最后再跟他确认一次。</p>,
      <p className="note-content">“看演唱会要什么护照，没有了，可以走了吗？”他手里攥着车钥匙，语气显的略有些不耐烦。我见状快速和小猫咪说了拜拜之后，跟在他后面，一起出了门。</p>,

      <h3 className="post-heading">我们俩能换个位置吗 [TODO]</h3>,

      <h3 className="post-heading">PPT梗 [TODO]</h3>,
      <p className="note-content">剧透</p>,
      <p className="note-content">{`${F}：“可是我PPT做的没那么好”`}</p>,
      <p className="note-content">我：“PPT做的好的人都很油腻。”</p>,

      <h3 className="post-heading">回“家”</h3>,
      <p className="note-content">{`从LA上高架之后我们的车就一路狂飙，手握方向盘的${F}油门加的丝滑，刹车踩的轻盈无比，转弯时方向盘控制的力度刚刚好，让人有种轻微的失重和眩晕感，坐在副驾的我体验到了一种难以名状的“爽”感。`}</p>,
      <p className="note-content">{`LA回尔湾的路上好多高架弯道，蜿蜒起伏的，加上地广人稀，路都修的宽阔，欧洲几乎见不到的8车道对加州司机来说可以说是司空见惯，但这对司机是个考验，一个不注意就可能下错了道，再转回来需要费点功夫。所以通常坐副驾的人除了陪司机聊天之外，还承担了一个比较重要的责任，那就是navigation。路痴加上不会开车的我一点也指望不上，但还是象征性的拿出手机开着google导航，一面注意路牌，一面仔细看地图，生怕自己弄错，让大家回不了家。大概半小时过后，我提着的心慢慢放松了下来，因为发现我的导航完全就是多余的，${F}他多线程操作，开车、导航、听音乐、同时还能在我们聊天中时不时的像个老干部似的插入一两句重点。驾驶员一脑多用，处理的还都是极端复杂的开放性任务，这计算效率alphago能与之相提并论吗？`}</p>,

      <p className="note-content">在加州，城市内公共交通几乎约等于无，出门只有开车或者uber，像我这样来短期访问的博士生压根不会去想买车这件事，加上没有驾照，就只能call uber。好在我刚来不久就和大家打成一片，所以经常有同事的车蹭坐。那段时间坐了好多不同的车，司机有男有女，除了和同事们一起吐槽加州司机很危险之外，倒是没什么特别的感觉。</p>,
      <p className="note-content">{`${F}开车让人上瘾，恰到好处的刺激，加上掐准时机的停顿，这“车”开的很老司机。如果没有接受过专业训练的话，天赋异禀！`}</p>,

      <p className="note-content">{`一路上我夸他就没停下来过，是发自内心的赞许！yr也跟着附和，我们两个一唱一和给${F}夸上天，我偶尔用眼角余光瞥了瞥他，他嘴角若有若无的上扬，平日里一张拒人于千里之外的冰山脸在今天难得现出了寻常人一样的喜悦表情。`}</p>,

      <p className="note-content">热火朝天的聊了一整路，快到尔湾时，已经是凌晨1点半了，大家都疲惫不堪，车里渐渐安静了下来，只剩下陶喆的歌还在一缕一缕的回放着。</p>,

      <p className="note-content">“我好饿啊”，我肚子咕咕地叫了几声，我吸了吸肚皮，独自咕哝了起来。</p>,
      <p className="note-content">{`“对哦，你今晚都没怎么吃，让${F}哥回家给你做！”坐在后排的yr很知趣的接上我的话，说话间上身从座位上直立了起来，朝前排微微倾斜。`}</p>,
      <p className="note-content">{`“家里有什么吃的吗？”我转过头朝正在注视前方，认真开车的${F}看去，内心有些许期待，没等回复，又自顾自的回答“我可以吃点零食，薯片还是有的”。`}</p>,
      <p className="note-content">{`“冰箱里有面包，你将就着吃点吧”${F}继续目视前方，不紧不慢的说。`}</p>,

      <p className="note-content">{`把yr和hz送回家之后，车里就只剩下我俩，没几分钟就到${F}住的宿舍区。把车停好之后，我们走路回“家”的路上，在一栋宿舍楼前碰见一个女孩，穿着短裙，站在马路边上像是在等人或者是uber。时值12月底，加州虽然没有冬天，但还是需要穿毛衣或者厚外套来抵挡10几度气温带来的寒气。凌晨2点左右，女孩独自一人身穿单薄衣服站在马路边，吸引到了我俩的注意。`}</p>,

      <p className="note-content">{`“这么晚一个人在外面，肯定不是什么好东西。” 我们过马路之后，${F}贱兮兮的揶揄道。`}</p>,
      <p className="note-content">“你说什么呢？我们俩不是也这么晚还在外面吗？” 我为女孩愤愤不平，有些愠怒。</p>,
      <p className="note-content">“我们俩也不是什么好东西……”他诨话一说好像就停不下来，居然说我也不是什么好东西，我一下子怒火中烧，抬起手就朝他的后背挥了过去。他自知无理，没敢还口。</p>,

      <p className="note-content">说话间就到家了，我们商量着他先去洗澡，我后面洗，我实在饿的不行，从冰箱里拿了几片面包开啃了起来。等我洗完澡，收拾好一切准备睡觉，已经快到3点，我上床一沾枕头就沉沉睡去了。</p>,

      <hr />,
      <p className="note-content post-footer">本文为虚构小说，灵感来源于生活碎片。人物与情节均经过艺术加工，请勿对号入座。</p>,
    ],
  },
  {
    id: 'launch',
    date: '2024-10-10',
    content:
      "Excited to launch my personal website! Started in 2022, " +
      "but put it on hold for 2 years, and now it's finally done.",
  },
];

export const notes = [...rawNotes].sort((a, b) => new Date(b.date) - new Date(a.date));

export const findNote = (id) => notes.find((n) => n.id === id);
