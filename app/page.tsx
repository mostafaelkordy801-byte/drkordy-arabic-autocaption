const features = [
  { n: "01", title: "شراء مرة واحدة", text: "من غير اشتراك شهري، ولا مصاريف بتتكرر كل ما تفتح البرنامج." },
  { n: "02", title: "شغال أوفلاين", text: "كمّل شغلك من غير إنترنت، ومن غير ما ملفاتك تخرج من جهازك." },
  { n: "03", title: "عربي من أول مرة", text: "مصمم للكلام العربي عشان يختصر عليك وقت التفريغ وكتابة الكابشن." },
];

const faqs = [
  ["هل فيه اشتراك شهري؟", "لا. بتدفع 100 جنيه مرة واحدة والنسخة تفضل معاك مدى الحياة."],
  ["لازم أكون متصل بالإنترنت؟", "لا. Dr Kordy Studio — Arabic AutoCaption بيشتغل أوفلاين بعد التثبيت."],
  ["هل ملفاتي بتترفع على سيرفر؟", "لأن المعالجة أوفلاين، ملفاتك تفضل على جهازك أثناء الشغل."],
  ["هستلم الـplugin إزاي؟", "بعد تأكيد الطلب والدفع، هتوصلك النسخة مع خطوات التثبيت والتشغيل."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="Dr Kordy Studio الرئيسية">
          <img className="brandLogo" src="/drkordy-arabic-autocaption/kd-logo.png" alt="" />
          <span>Dr Kordy Studio</span>
        </a>
        <a className="navCta" href="#buy">اشتري بـ 100 جنيه</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Arabic AutoCaption</p>
          <h1>الكابشن العربي،<br /><em>من غير اشتراك.</em></h1>
          <p className="lead">حوّل كلامك العربي لكابشن بسرعة، على جهازك ومن غير إنترنت. ادفع مرة واحدة واستخدمه طول العمر.</p>
          <div className="heroActions">
            <a className="primary" href="#buy">اشتري نسختك — 100 ج.م <span>←</span></a>
            <a className="textLink" href="#how">شوف بيشتغل إزاي</a>
          </div>
          <div className="trustRow">
            <span>✓ بدون اشتراك</span><span>✓ يعمل أوفلاين</span><span>✓ شراء مدى الحياة</span>
          </div>
        </div>

        <div className="productVisual" aria-label="معاينة شكل الكابشن العربي">
          <div className="visualTop"><span>DR KORDY STUDIO / AUTO CAPTION</span><span className="status">● OFFLINE</span></div>
          <div className="wave" aria-hidden="true">
            {[18,34,56,26,72,42,64,88,52,30,68,44,80,56,24,46,70,38,58,28,76,48,32,62].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}
          </div>
          <div className="captionCard">
            <span className="time">00:04.21</span>
            <strong>خلّي المحتوى يتكلم عربي</strong>
            <small>تم إنشاء الكابشن على جهازك</small>
          </div>
          <div className="visualFoot"><span>AR</span><span>جاري التحليل...</span><b>100%</b></div>
        </div>
      </section>

      <section className="marquee" aria-label="مميزات سريعة"><div>مرة واحدة فقط · أوفلاين بالكامل · خصوصية أعلى · كابشن عربي · 100 جنيه فقط · مرة واحدة فقط · أوفلاين بالكامل · خصوصية أعلى · كابشن عربي ·</div></section>

      <section className="section shell" id="how">
        <div className="sectionHead">
          <p className="kicker">ليه Dr Kordy Studio؟</p>
          <h2>وقتك للمحتوى.<br />مش للاشتراكات.</h2>
          <p>أداة بسيطة ومباشرة، معمولة عشان تشتغل وتنجز من غير تعقيد أو تكلفة شهرية.</p>
        </div>
        <div className="features">
          {features.map((f)=><article key={f.n}><span>{f.n}</span><h3>{f.title}</h3><p>{f.text}</p></article>)}
        </div>
      </section>

      <section className="stepsWrap">
        <div className="section shell">
          <p className="kicker light">3 خطوات وخلاص</p>
          <h2 className="lightTitle">من الصوت للكابشن<br />في وقت أقل.</h2>
          <div className="steps">
            <div><b>1</b><h3>ضيف الملف</h3><p>اختار الفيديو أو الصوت اللي عايز تعمل له كابشن.</p></div>
            <div><b>2</b><h3>سيبه يسمع</h3><p>الـplugin يحلل الكلام العربي على جهازك، أوفلاين.</p></div>
            <div><b>3</b><h3>خد الكابشن</h3><p>راجع النتيجة وكمّل شغلك من غير فاتورة جديدة.</p></div>
          </div>
        </div>
      </section>

      <section className="section shell buy" id="buy">
        <div className="priceCopy">
          <p className="kicker">سعر إطلاق بسيط</p>
          <h2>امتلكه.<br />ما تأجّروش.</h2>
          <p>بدل ما تدفع كل شهر، دفعة واحدة صغيرة تخلي Dr Kordy Studio معاك في كل مشروع جاي.</p>
        </div>
        <div className="priceCard">
          <span className="badge">ترخيص مدى الحياة</span>
          <div className="price"><strong>100</strong><span>جنيه<br />مرة واحدة</span></div>
          <ul><li>Arabic AutoCaption</li><li>يعمل بدون إنترنت</li><li>لا توجد رسوم شهرية</li><li>خطوات تثبيت واضحة</li></ul>
          <a className="primary full" href="mailto:?subject=طلب شراء Dr Kordy Studio Arabic AutoCaption&body=أريد شراء Dr Kordy Studio Arabic AutoCaption بسعر 100 جنيه.">اطلب نسختك الآن <span>←</span></a>
          <small>هنضيف وسيلة الدفع المباشر قريبًا</small>
        </div>
      </section>

      <section className="section shell faq">
        <div><p className="kicker">أسئلة سريعة</p><h2>قبل ما تبدأ.</h2></div>
        <div className="faqList">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <footer><div className="shell footerInner"><div className="brand"><img className="brandLogo" src="/drkordy-arabic-autocaption/kd-logo.png" alt="" /><span>Dr Kordy Studio</span></div><p>Arabic AutoCaption — اشتري مرة، استخدم طول العمر.</p><a href="#top">ارجع لفوق ↑</a></div></footer>
    </main>
  );
}
