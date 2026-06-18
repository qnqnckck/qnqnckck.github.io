(function () {
  var supported = ["ko", "en", "ja", "zh", "es", "fr", "de", "pt"];
  var labels = {
    ko: {
      titleMarketing: "가계부 - 기록부터 검토까지 끊기지 않는 생활 장부",
      titleSupport: "가계부 지원 페이지",
      titlePrivacy: "가계부 개인정보처리방침",
      meta: "가계부 - 기록, 검토, 계획, 마감을 기기 안에서 정리하는 로컬 우선 가계부 앱",
      brand: "가계부",
      support: "지원",
      privacy: "개인정보",
      intro: "Household Ledger",
      asideTitle: "기록은 빠르게,<br><mark>검토는 확실하게</mark>,<br>마감은 가볍게.",
      screensCta: "화면 보기",
      eyebrow: "LOCAL-FIRST HOUSEHOLD LEDGER",
      h1: "가계부 기록이 끊기지 않도록 설계한 생활 장부",
      lead: "지출을 입력하고, 의심되는 기록을 검토하고, 다음 결제와 월 마감을 준비합니다. 핵심 흐름은 계정 가입이나 서버 없이 기기 안에서 먼저 동작합니다.",
      proofLabel: "핵심 흐름",
      proofValue: "Home -> Composer -> Review -> Planning -> Closeout",
      quick1a: "입력", quick1b: "지출, 수입, 이체",
      quick2a: "검토", quick2b: "중복, 누락, 반복",
      quick3a: "설정", quick3b: "언어, 테마, 위젯",
      screenTitle: "화면 흐름", screenSub: "실제 앱 스모크 화면",
      homeTitle: "홈", homeSub: "이번 달 흐름, 확인 필요, 최근 기록",
      composerTitle: "기록", composerSub: "계정, 날짜, 상점, 카테고리를 한 장에서 정리",
      reviewTitle: "검토", reviewSub: "중복 병합과 반복 규칙 처리 후 완료 상태 확인",
      planningTitle: "계획", planningSub: "다가오는 지출과 결제 준비를 미리 확인",
      featureTitle: "무엇을 하나요", offline: "offline-first",
      f1t: "빠른 기록", f1p: "지출, 수입, 이체를 분리하고 계정과 카테고리를 함께 정리합니다.",
      f2t: "검토 큐", f2p: "중복 의심, 카테고리 누락, 반복 지출 변화를 한곳에서 처리합니다.",
      f3t: "마감 준비", f3p: "주간/월간 마감 전 확인할 항목을 분리해 부담을 줄입니다.",
      f4t: "로컬 우선", f4p: "핵심 기록과 설정은 사용자의 기기 안에서 먼저 동작하도록 설계했습니다.",
      noticeTitle: "민감한 생활 기록을 조심스럽게 다룹니다",
      noticeBody: "가계부는 은행 동기화나 서버 계정을 전제로 하지 않습니다. 광고가 표시되는 경우에도 거래 금액, 상점명, 계정명, 메모, 영수증 내용은 광고 타겟팅 문맥으로 전달하지 않는 정책을 기준으로 설계합니다.",
      supportPage: "지원 페이지", privacyPolicy: "개인정보처리방침", appList: "LABHUB 앱 목록",
      footer: "LABHUB · Household Ledger public page<br>문의: qnqnckck@gmail.com",
      storeNoteTitle: "Store support URL",
      storeNoteBody: "이 페이지는 Google Play 등록용 앱 소개, 지원, 개인정보 URL의 진입점으로 사용할 수 있습니다.",
      supportIntro: "가계부는 지출 기록, 검토, 계획, 마감을 기기 중심으로 정리하는 로컬 우선 생활 장부 앱입니다.",
      contact: "문의", contactBody: "앱 사용 중 문제, 스토어 등록 정보, 개인정보 관련 문의는 아래 이메일로 보내주세요.",
      troubleshooting: "기본 문제 해결",
      tr1: "앱이 최신 버전인지 확인해 주세요.",
      tr2: "언어 또는 테마 표시가 맞지 않으면 앱 설정에서 시스템 설정 또는 원하는 값을 다시 선택해 주세요.",
      tr3: "위젯 표시가 맞지 않으면 앱을 한 번 열어 최신 장부 상태를 갱신해 주세요.",
      tr4: "앱 삭제, 기기 초기화, 저장공간 정리 시 로컬 데이터가 삭제될 수 있습니다.",
      data: "데이터",
      dataBody: "핵심 장부 기록, 검토 상태, 설정은 기본적으로 사용자의 기기 안에 저장되는 것을 기준으로 설계되었습니다. 별도 계정 생성이나 서버 동기화를 전제로 하지 않습니다.",
      adsTitle: "광고와 민감 정보",
      adsBody: "무료 버전에서 광고 슬롯이 표시될 수 있습니다. 단, 거래 금액, 상점명, 계정명, 메모, 영수증 내용은 광고 타겟팅 문맥으로 제공하지 않는 정책을 기준으로 합니다.",
      official: "공식 소개 페이지",
      updated: "시행일: 2026년 6월 19일",
      privacyIntro: "가계부는 사용자의 생활 장부를 기기 중심으로 관리하도록 설계된 앱입니다. 본 방침은 가계부 앱에서 처리될 수 있는 정보와 사용 방식을 설명합니다.",
      processed: "처리하는 정보",
      p1: "사용자가 직접 입력한 거래 금액, 날짜, 상점 또는 상대방, 카테고리, 계정, 메모, 태그, 첨부 정보",
      p2: "검토 상태, 중복 의심 처리, 반복 지출 변화 처리, 마감 상태",
      p3: "앱 설정, 언어, 테마, 위젯 개인정보 표시 설정",
      p4: "영수증 또는 음성 입력 기능을 사용하는 경우 사용자가 제공한 이미지, 음성 또는 초안 내용",
      purpose: "정보 사용 목적",
      u1: "가계부 기록, 수정, 분류, 검토 기능 제공",
      u2: "중복 기록, 카테고리 누락, 반복 지출 변화 등 사용자 확인 항목 표시",
      u3: "계획, 마감, 위젯, 언어와 테마 설정 유지",
      u4: "사용자가 선택한 입력 보조 기능 제공",
      storage: "저장 및 전송",
      storageBody: "핵심 데이터는 기본적으로 사용자의 기기에 저장됩니다. 가계부는 계정 생성이나 개발자 서버 저장을 전제로 하지 않으며, 사용자의 거래 기록을 개발자 서버로 전송하지 않습니다.",
      permissions: "권한",
      permissionsBody: "영수증 촬영, 이미지 첨부, 음성 입력, 알림, 위젯 기능을 사용하는 경우 기기 권한이 필요할 수 있습니다. 권한은 해당 기능 제공을 위해서만 사용됩니다.",
      adsPrivacyBody: "무료 버전에서 제한적인 광고가 표시될 수 있습니다. 광고는 핵심 기록, 검토, 마감 결정 화면을 방해하지 않는 위치에만 표시하는 것을 원칙으로 합니다. 거래 금액, 상점명, 계정명, 메모, 영수증 내용은 광고 타겟팅 문맥으로 전달하지 않습니다.",
      thirdParty: "분석 및 제3자 제공",
      thirdPartyBody: "현재 이 공개 방침은 로컬 우선 앱 동작을 기준으로 작성되었습니다. 향후 분석, 동기화, 백업, 광고 SDK 등 제3자 서비스가 추가될 경우 앱 스토어 고지와 본 방침을 업데이트합니다.",
      deletion: "보관 및 삭제",
      deletionBody: "앱 내 데이터는 사용자가 앱에서 삭제하거나 앱을 삭제할 때 기기에서 제거될 수 있습니다. 운영체제의 백업 설정에 따라 기기 백업에 포함될 수 있습니다.",
      children: "아동의 개인정보",
      childrenBody: "가계부는 아동을 대상으로 하지 않습니다. 보호자가 아동의 개인정보가 입력되었다고 판단하는 경우 아래 문의처로 연락해 주세요.",
      privacyContact: "개인정보 관련 문의:"
    },
    en: {
      titleMarketing: "Household Ledger - record, review, and close your budget",
      titleSupport: "Household Ledger Support",
      titlePrivacy: "Household Ledger Privacy Policy",
      meta: "Household Ledger is a local-first budgeting app for recording, reviewing, planning, and closing household finances on your device.",
      brand: "Household Ledger", support: "Support", privacy: "Privacy",
      intro: "Household Ledger", asideTitle: "Record quickly,<br><mark>review clearly</mark>,<br>close lightly.",
      screensCta: "View screens", eyebrow: "LOCAL-FIRST HOUSEHOLD LEDGER",
      h1: "A household ledger designed so budgeting does not break mid-flow",
      lead: "Enter expenses, review suspicious records, and prepare upcoming payments and month-end closeouts. Core flows work on-device first without requiring an account or server.",
      proofLabel: "Core flow", proofValue: "Home -> Composer -> Review -> Planning -> Closeout",
      quick1a: "Entry", quick1b: "Expense, income, transfer", quick2a: "Review", quick2b: "Duplicates, gaps, recurring items", quick3a: "Settings", quick3b: "Language, theme, widgets",
      screenTitle: "Screen flow", screenSub: "Real app smoke-test screens",
      homeTitle: "Home", homeSub: "This month, needs review, recent records", composerTitle: "Composer", composerSub: "Account, date, merchant, and category in one place",
      reviewTitle: "Review", reviewSub: "Confirm completion after merging duplicates and handling recurring rules", planningTitle: "Planning", planningSub: "Check upcoming expenses and payments in advance",
      featureTitle: "What it does", offline: "offline-first",
      f1t: "Fast entry", f1p: "Separate expenses, income, and transfers while keeping accounts and categories organized.",
      f2t: "Review queue", f2p: "Handle suspected duplicates, missing categories, and recurring expense changes in one place.",
      f3t: "Closeout prep", f3p: "Separate items to check before weekly or monthly closeout to reduce friction.",
      f4t: "Local-first", f4p: "Core records and settings are designed to work on the user's device first.",
      noticeTitle: "Sensitive financial records are handled carefully",
      noticeBody: "Household Ledger does not assume bank sync or server accounts. Even when ads are shown, transaction amounts, merchant names, account names, notes, and receipt contents are not provided as ad-targeting context.",
      supportPage: "Support page", privacyPolicy: "Privacy Policy", appList: "LABHUB app list",
      footer: "LABHUB · Household Ledger public page<br>Contact: qnqnckck@gmail.com",
      storeNoteTitle: "Store support URL", storeNoteBody: "This page can be used as the app introduction, support, and privacy entry point for Google Play listings.",
      supportIntro: "Household Ledger is a local-first app for organizing expense records, review, planning, and closeout around the user's device.",
      contact: "Contact", contactBody: "For app issues, store listing information, or privacy questions, email us below.",
      troubleshooting: "Basic troubleshooting", tr1: "Make sure the app is updated to the latest version.", tr2: "If language or theme display looks wrong, reselect system mode or your preferred option in settings.", tr3: "If widgets look stale, open the app once to refresh the latest ledger state.", tr4: "Local data may be removed when the app is deleted, the device is reset, or storage is cleared.",
      data: "Data", dataBody: "Core ledger records, review state, and settings are designed to be stored on the user's device by default. The app does not require account creation or server sync.",
      adsTitle: "Ads and sensitive information", adsBody: "Ad slots may appear in the free version. Transaction amounts, merchant names, account names, notes, and receipt contents are not provided as ad-targeting context.",
      official: "Official introduction page", updated: "Effective date: June 19, 2026",
      privacyIntro: "Household Ledger is designed to manage a user's household ledger around their device. This policy explains what information may be processed and how it is used.",
      processed: "Information processed", p1: "Transaction amount, date, merchant or counterparty, category, account, memo, tags, and attachments entered by the user", p2: "Review status, suspected duplicate handling, recurring expense change handling, and closeout status", p3: "App settings, language, theme, and widget privacy display settings", p4: "Images, audio, or draft content provided by the user when using receipt or voice input features",
      purpose: "Purpose of use", u1: "Provide ledger creation, editing, classification, and review features", u2: "Show items that need user confirmation, such as duplicates, missing categories, or recurring expense changes", u3: "Maintain planning, closeout, widget, language, and theme settings", u4: "Provide input assistance selected by the user",
      storage: "Storage and transfer", storageBody: "Core data is stored on the user's device by default. Household Ledger does not require account creation or developer-server storage, and does not send transaction records to a developer server.",
      permissions: "Permissions", permissionsBody: "Device permissions may be required for receipt capture, image attachment, voice input, notifications, or widgets. Permissions are used only to provide the selected feature.",
      adsPrivacyBody: "Limited ads may appear in the free version. Ads are intended to stay out of core record, review, and closeout decision screens. Transaction amounts, merchant names, account names, notes, and receipt contents are not passed as ad-targeting context.",
      thirdParty: "Analytics and third parties", thirdPartyBody: "This public policy is currently based on local-first app behavior. If analytics, sync, backup, ad SDKs, or other third-party services are added, the app store disclosure and this policy will be updated.",
      deletion: "Retention and deletion", deletionBody: "In-app data may be removed when the user deletes it in the app or uninstalls the app. It may be included in device backups depending on operating system backup settings.",
      children: "Children's privacy", childrenBody: "Household Ledger is not directed to children. If a guardian believes a child's personal information has been entered, contact us below.",
      privacyContact: "Privacy contact:"
    }
  };

  var alias = {
    ja: {
      titleMarketing: "家計簿 - 記録から確認まで途切れない生活台帳", titleSupport: "家計簿サポート", titlePrivacy: "家計簿プライバシーポリシー",
      brand: "家計簿", support: "サポート", privacy: "プライバシー", h1: "家計簿の記録が途切れないように設計された生活台帳",
      lead: "支出を入力し、疑わしい記録を確認し、次の支払いと月末締めを準備します。主要な流れはアカウントやサーバーなしで端末上で動作します.",
      screensCta: "画面を見る", quick1a: "入力", quick1b: "支出・収入・振替", quick2a: "確認", quick2b: "重複・抜け・繰り返し", quick3a: "設定", quick3b: "言語・テーマ・ウィジェット",
      screenTitle: "画面の流れ", homeTitle: "ホーム", composerTitle: "記録", reviewTitle: "確認", planningTitle: "計画", featureTitle: "主な機能",
      f1t: "素早い記録", f2t: "確認キュー", f3t: "締め準備", f4t: "ローカル優先", noticeTitle: "機密性の高い生活記録を慎重に扱います",
      supportPage: "サポート", privacyPolicy: "プライバシーポリシー", appList: "LABHUBアプリ一覧", contact: "お問い合わせ", troubleshooting: "基本的な解決方法", data: "データ", adsTitle: "広告と機密情報", official: "公式紹介ページ", updated: "施行日: 2026年6月19日",
      processed: "処理する情報", purpose: "利用目的", storage: "保存と送信", permissions: "権限", thirdParty: "分析と第三者提供", deletion: "保存と削除", children: "子どものプライバシー", privacyContact: "プライバシー問い合わせ:"
    },
    zh: {
      titleMarketing: "家庭账本 - 从记录到复核不中断", titleSupport: "家庭账本支持", titlePrivacy: "家庭账本隐私政策",
      brand: "家庭账本", support: "支持", privacy: "隐私", h1: "为不中断的家庭记账流程而设计",
      lead: "记录支出，复核可疑记录，并准备下一笔付款和月底结算。核心流程优先在设备本地运行，无需账户或服务器。",
      screensCta: "查看界面", quick1a: "录入", quick1b: "支出、收入、转账", quick2a: "复核", quick2b: "重复、遗漏、周期项", quick3a: "设置", quick3b: "语言、主题、小组件",
      screenTitle: "界面流程", homeTitle: "首页", composerTitle: "记录", reviewTitle: "复核", planningTitle: "计划", featureTitle: "主要功能",
      f1t: "快速记录", f2t: "复核队列", f3t: "结算准备", f4t: "本地优先", noticeTitle: "谨慎处理敏感生活财务记录",
      supportPage: "支持页面", privacyPolicy: "隐私政策", appList: "LABHUB 应用列表", contact: "联系", troubleshooting: "基本故障排除", data: "数据", adsTitle: "广告和敏感信息", official: "官方介绍页面", updated: "生效日期：2026年6月19日",
      processed: "处理的信息", purpose: "使用目的", storage: "存储与传输", permissions: "权限", thirdParty: "分析和第三方", deletion: "保留和删除", children: "儿童隐私", privacyContact: "隐私联系:"
    },
    es: {
      titleMarketing: "Libro de gastos del hogar - registro, revisión y cierre", titleSupport: "Soporte de Libro del hogar", titlePrivacy: "Política de privacidad de Libro del hogar",
      brand: "Libro del hogar", support: "Soporte", privacy: "Privacidad", h1: "Un libro del hogar diseñado para que el registro no se interrumpa",
      lead: "Registra gastos, revisa movimientos sospechosos y prepara próximos pagos y cierres mensuales. Los flujos principales funcionan primero en el dispositivo, sin cuenta ni servidor.",
      screensCta: "Ver pantallas", quick1a: "Entrada", quick1b: "Gasto, ingreso, transferencia", quick2a: "Revisión", quick2b: "Duplicados, faltantes, recurrentes", quick3a: "Ajustes", quick3b: "Idioma, tema, widgets",
      screenTitle: "Flujo de pantallas", homeTitle: "Inicio", composerTitle: "Registro", reviewTitle: "Revisión", planningTitle: "Planificación", featureTitle: "Qué hace",
      f1t: "Registro rápido", f2t: "Cola de revisión", f3t: "Preparar cierre", f4t: "Local primero", noticeTitle: "Tratamos con cuidado los registros financieros sensibles",
      supportPage: "Página de soporte", privacyPolicy: "Política de privacidad", appList: "Lista de apps LABHUB", contact: "Contacto", troubleshooting: "Solución básica", data: "Datos", adsTitle: "Anuncios e información sensible", official: "Página oficial", updated: "Fecha de vigencia: 19 de junio de 2026",
      processed: "Información procesada", purpose: "Finalidad de uso", storage: "Almacenamiento y transferencia", permissions: "Permisos", thirdParty: "Analítica y terceros", deletion: "Conservación y eliminación", children: "Privacidad de menores", privacyContact: "Contacto de privacidad:"
    },
    fr: {
      titleMarketing: "Carnet de budget - noter, vérifier et clôturer", titleSupport: "Assistance Carnet de budget", titlePrivacy: "Politique de confidentialité du Carnet de budget",
      brand: "Carnet de budget", support: "Assistance", privacy: "Confidentialité", h1: "Un carnet de budget conçu pour ne pas interrompre vos suivis",
      lead: "Saisissez les dépenses, vérifiez les écritures suspectes et préparez les paiements à venir ainsi que la clôture mensuelle. Les flux essentiels fonctionnent d'abord sur l'appareil.",
      screensCta: "Voir les écrans", quick1a: "Saisie", quick1b: "Dépense, revenu, transfert", quick2a: "Vérification", quick2b: "Doublons, manques, récurrences", quick3a: "Réglages", quick3b: "Langue, thème, widgets",
      screenTitle: "Parcours des écrans", homeTitle: "Accueil", composerTitle: "Saisie", reviewTitle: "Vérification", planningTitle: "Planification", featureTitle: "Fonctions",
      f1t: "Saisie rapide", f2t: "File de vérification", f3t: "Préparer la clôture", f4t: "Local d'abord", noticeTitle: "Les données financières sensibles sont traitées avec prudence",
      supportPage: "Assistance", privacyPolicy: "Politique de confidentialité", appList: "Liste des apps LABHUB", contact: "Contact", troubleshooting: "Dépannage de base", data: "Données", adsTitle: "Publicités et données sensibles", official: "Page officielle", updated: "Date d'entrée en vigueur : 19 juin 2026",
      processed: "Informations traitées", purpose: "Finalités", storage: "Stockage et transfert", permissions: "Autorisations", thirdParty: "Analyse et tiers", deletion: "Conservation et suppression", children: "Confidentialité des enfants", privacyContact: "Contact confidentialité :"
    },
    de: {
      titleMarketing: "Haushaltsbuch - erfassen, prüfen und abschließen", titleSupport: "Haushaltsbuch Support", titlePrivacy: "Haushaltsbuch Datenschutzrichtlinie",
      brand: "Haushaltsbuch", support: "Support", privacy: "Datenschutz", h1: "Ein Haushaltsbuch, damit deine Aufzeichnungen nicht unterbrochen werden",
      lead: "Erfasse Ausgaben, prüfe verdächtige Einträge und bereite kommende Zahlungen sowie Monatsabschlüsse vor. Die Kernfunktionen laufen zuerst lokal auf dem Gerät.",
      screensCta: "Screens ansehen", quick1a: "Eingabe", quick1b: "Ausgaben, Einnahmen, Umbuchungen", quick2a: "Prüfung", quick2b: "Duplikate, Lücken, Wiederholungen", quick3a: "Einstellungen", quick3b: "Sprache, Design, Widgets",
      screenTitle: "Ablauf", homeTitle: "Start", composerTitle: "Erfassung", reviewTitle: "Prüfung", planningTitle: "Planung", featureTitle: "Funktionen",
      f1t: "Schnelle Erfassung", f2t: "Prüfliste", f3t: "Abschluss vorbereiten", f4t: "Lokal zuerst", noticeTitle: "Sensible Finanzdaten werden sorgfältig behandelt",
      supportPage: "Supportseite", privacyPolicy: "Datenschutzrichtlinie", appList: "LABHUB App-Liste", contact: "Kontakt", troubleshooting: "Grundlegende Fehlerbehebung", data: "Daten", adsTitle: "Werbung und sensible Informationen", official: "Offizielle Infoseite", updated: "Gültig ab: 19. Juni 2026",
      processed: "Verarbeitete Informationen", purpose: "Zweck der Nutzung", storage: "Speicherung und Übertragung", permissions: "Berechtigungen", thirdParty: "Analyse und Drittanbieter", deletion: "Aufbewahrung und Löschung", children: "Datenschutz von Kindern", privacyContact: "Datenschutzkontakt:"
    },
    pt: {
      titleMarketing: "Livro doméstico - registrar, revisar e fechar", titleSupport: "Suporte do Livro doméstico", titlePrivacy: "Política de privacidade do Livro doméstico",
      brand: "Livro doméstico", support: "Suporte", privacy: "Privacidade", h1: "Um livro doméstico feito para manter seus registros contínuos",
      lead: "Registre despesas, revise lançamentos suspeitos e prepare próximos pagamentos e fechamentos mensais. Os fluxos principais funcionam primeiro no dispositivo.",
      screensCta: "Ver telas", quick1a: "Entrada", quick1b: "Despesa, receita, transferência", quick2a: "Revisão", quick2b: "Duplicados, lacunas, recorrentes", quick3a: "Configurações", quick3b: "Idioma, tema, widgets",
      screenTitle: "Fluxo de telas", homeTitle: "Início", composerTitle: "Registro", reviewTitle: "Revisão", planningTitle: "Planejamento", featureTitle: "O que faz",
      f1t: "Registro rápido", f2t: "Fila de revisão", f3t: "Preparar fechamento", f4t: "Local primeiro", noticeTitle: "Registros financeiros sensíveis são tratados com cuidado",
      supportPage: "Página de suporte", privacyPolicy: "Política de privacidade", appList: "Lista de apps LABHUB", contact: "Contato", troubleshooting: "Solução básica", data: "Dados", adsTitle: "Anúncios e informações sensíveis", official: "Página oficial", updated: "Data de vigência: 19 de junho de 2026",
      processed: "Informações processadas", purpose: "Finalidade de uso", storage: "Armazenamento e transferência", permissions: "Permissões", thirdParty: "Análises e terceiros", deletion: "Retenção e exclusão", children: "Privacidade de crianças", privacyContact: "Contato de privacidade:"
    }
  };

  Object.keys(alias).forEach(function (lang) {
    labels[lang] = Object.assign({}, labels.en, alias[lang]);
  });

  var page = document.body.getAttribute("data-page") || "marketing";
  var selectorMap = {
    marketing: [
      [".brand span", "brand"], [".header-action", "support"], [".aside-intro", "intro"], [".aside h2", "asideTitle", true],
      [".aside-actions a:nth-child(1)", "screensCta"], [".aside-actions a:nth-child(2)", "privacy"], [".eyebrow", "eyebrow"], ["h1", "h1"], [".lead", "lead"],
      [".proof-card span", "proofLabel"], [".proof-card strong", "proofValue"], [".quick-tile:nth-child(1) span", "quick1a"], [".quick-tile:nth-child(1) strong", "quick1b"],
      [".quick-tile:nth-child(2) span", "quick2a"], [".quick-tile:nth-child(2) strong", "quick2b"], [".quick-tile:nth-child(3) span", "quick3a"], [".quick-tile:nth-child(3) strong", "quick3b"],
      ["#screens .section-title h2", "screenTitle"], ["#screens .section-title span", "screenSub"], [".screen-card:nth-of-type(1) strong", "homeTitle"], [".screen-card:nth-of-type(1) .screen-head span:not(.badge)", "homeSub"],
      [".screen-card:nth-of-type(2) strong", "composerTitle"], [".screen-card:nth-of-type(2) .screen-head span:not(.badge)", "composerSub"], [".screen-card:nth-of-type(3) strong", "reviewTitle"], [".screen-card:nth-of-type(3) .screen-head span:not(.badge)", "reviewSub"],
      [".screen-card:nth-of-type(4) strong", "planningTitle"], [".screen-card:nth-of-type(4) .screen-head span:not(.badge)", "planningSub"], [".content > .section:nth-of-type(3) .section-title h2", "featureTitle"], [".content > .section:nth-of-type(3) .section-title span", "offline"],
      [".feature-card:nth-child(1) h3", "f1t"], [".feature-card:nth-child(1) p", "f1p"], [".feature-card:nth-child(2) h3", "f2t"], [".feature-card:nth-child(2) p", "f2p"], [".feature-card:nth-child(3) h3", "f3t"], [".feature-card:nth-child(3) p", "f3p"], [".feature-card:nth-child(4) h3", "f4t"], [".feature-card:nth-child(4) p", "f4p"],
      [".notice-card h2", "noticeTitle"], [".notice-card p", "noticeBody"], [".link-card a:nth-child(1)", "supportPage"], [".link-card a:nth-child(2)", "privacyPolicy"], [".link-card a:nth-child(3)", "appList"], ["footer", "footer", true],
      [".qr-panel strong", "storeNoteTitle"], [".qr-panel p", "storeNoteBody"]
    ],
    support: [
      ["h1", "titleSupport"], [".card > p:nth-of-type(1)", "supportIntro"], ["h2:nth-of-type(1)", "contact"], [".card > p:nth-of-type(2)", "contactBody"], ["h2:nth-of-type(2)", "troubleshooting"],
      ["li:nth-child(1)", "tr1"], ["li:nth-child(2)", "tr2"], ["li:nth-child(3)", "tr3"], ["li:nth-child(4)", "tr4"], ["h2:nth-of-type(3)", "data"], [".card > p:nth-of-type(4)", "dataBody"],
      ["h2:nth-of-type(4)", "adsTitle"], [".card > p:nth-of-type(5)", "adsBody"], [".nav a:nth-child(1)", "official"], [".nav a:nth-child(2)", "privacyPolicy"]
    ],
    privacy: [
      ["h1", "titlePrivacy"], [".updated", "updated"], [".card > p:nth-of-type(2)", "privacyIntro"], ["h2:nth-of-type(1)", "processed"], ["ul:nth-of-type(1) li:nth-child(1)", "p1"], ["ul:nth-of-type(1) li:nth-child(2)", "p2"], ["ul:nth-of-type(1) li:nth-child(3)", "p3"], ["ul:nth-of-type(1) li:nth-child(4)", "p4"],
      ["h2:nth-of-type(2)", "purpose"], ["ul:nth-of-type(2) li:nth-child(1)", "u1"], ["ul:nth-of-type(2) li:nth-child(2)", "u2"], ["ul:nth-of-type(2) li:nth-child(3)", "u3"], ["ul:nth-of-type(2) li:nth-child(4)", "u4"],
      ["h2:nth-of-type(3)", "storage"], [".card > p:nth-of-type(3)", "storageBody"], ["h2:nth-of-type(4)", "permissions"], [".card > p:nth-of-type(4)", "permissionsBody"],
      ["h2:nth-of-type(5)", "adsTitle"], [".card > p:nth-of-type(5)", "adsPrivacyBody"], ["h2:nth-of-type(6)", "thirdParty"], [".card > p:nth-of-type(6)", "thirdPartyBody"],
      ["h2:nth-of-type(7)", "deletion"], [".card > p:nth-of-type(7)", "deletionBody"], ["h2:nth-of-type(8)", "children"], [".card > p:nth-of-type(8)", "childrenBody"], ["h2:nth-of-type(9)", "contact"]
    ]
  };

  function languageFromBrowser() {
    var code = (navigator.language || "ko").slice(0, 2).toLowerCase();
    return supported.indexOf(code) >= 0 ? code : "en";
  }

  function setText(selector, value, html) {
    var node = document.querySelector(selector);
    if (!node || value == null) return;
    if (html) node.innerHTML = value;
    else node.textContent = value;
  }

  function applyLanguage(lang) {
    var t = labels[lang] || labels.en;
    document.documentElement.lang = lang;
    document.title = t[page === "privacy" ? "titlePrivacy" : page === "support" ? "titleSupport" : "titleMarketing"];
    var meta = document.querySelector('meta[name="description"]');
    if (meta && t.meta) meta.setAttribute("content", t.meta);
    (selectorMap[page] || []).forEach(function (item) {
      setText(item[0], t[item[1]], item[2]);
    });
    var privacyContact = document.querySelector(".card > p:nth-last-of-type(2)");
    if (page === "privacy" && privacyContact) {
      privacyContact.innerHTML = t.privacyContact + ' <a href="mailto:qnqnckck@gmail.com">qnqnckck@gmail.com</a>';
    }
    var lastPrivacyLinks = document.querySelector(".card > p:last-child");
    if (page === "privacy" && lastPrivacyLinks) {
      lastPrivacyLinks.innerHTML = '<a href="./household-ledger.html">' + t.official + '</a> · <a href="./household-ledger-support.html">' + t.supportPage + '</a>';
    }
    localStorage.setItem("householdLedgerLanguage", lang);
    document.querySelectorAll("[data-language-select]").forEach(function (select) {
      select.value = lang;
    });
  }

  var selected = localStorage.getItem("householdLedgerLanguage") || languageFromBrowser();
  if (supported.indexOf(selected) < 0) selected = "en";
  document.querySelectorAll("[data-language-select]").forEach(function (select) {
    select.addEventListener("change", function () { applyLanguage(select.value); });
  });
  applyLanguage(selected);
})();
