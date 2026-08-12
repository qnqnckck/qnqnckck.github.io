(() => {
  "use strict";

  const locales = [
    ["en", "English"],
    ["ko", "한국어"],
    ["ja", "日本語"],
    ["zh-CN", "简体中文"],
    ["zh-TW", "繁體中文"],
    ["es", "Español"],
    ["de", "Deutsch"],
    ["fr", "Français"],
    ["pt-BR", "Português (Brasil)"],
    ["it", "Italiano"],
    ["id", "Bahasa Indonesia"],
    ["hi", "हिन्दी"],
  ];

  const en = {
    iconAlt: "Paper Dock app icon",
    languageLabel: "Language",
    navProduct: "Product",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navApps: "Apps",
    homeTag: "PRIVATE · OFFLINE · ON DEVICE",
    homeTitle: "Dock your<br>PDFs.",
    homeIntro:
      "Merge, compress, extract, rotate, watermark, protect, and clean PDFs entirely on your phone. No account, cloud upload, or ads.",
    homeFeaturesAction: "Explore tools",
    homeSupportAction: "Get support",
    toolMerge: "Merge",
    toolMergeBody: "Add, remove, and reorder PDFs into one document.",
    toolCompress: "Smart compress",
    toolCompressBody: "Balance image quality and estimated output size.",
    toolExtract: "Extract pages",
    toolExtractBody: "Choose exactly the pages you need from visual previews.",
    toolRotate: "Rotate",
    toolRotateBody: "Rotate the full document by 90°, 180°, or 270°.",
    toolWatermark: "Watermark · Pro",
    toolWatermarkBody:
      "Set text, size, opacity, and position with a live preview.",
    toolProtect: "Protect & clean · Pro",
    toolProtectBody: "Add a password and remove document metadata.",
    homePrivacyTag: "NO ACCOUNT / NO CLOUD / NO ANALYTICS",
    homeValue:
      "Free tools have no ads, forced watermark, or daily limit. One purchase permanently unlocks Pro.",
    supportTitle: "SUPPORT<br>DESK",
    supportUpdated:
      "Paper Dock · com.labhub.paperdock · Support for all 12 app languages",
    supportPassword: "Password-protected PDF",
    supportPasswordBody:
      "Choose an unlocked copy. Paper Dock does not bypass passwords or modify the original.",
    supportDamaged: "Damaged PDF",
    supportDamagedBody:
      "Export the PDF again from its original app. Failed jobs remove partial output and keep the original unchanged.",
    supportCancel: "Cancellation",
    supportCancelBody:
      "Canceling removes the file being created and preserves the original. Only completed results enter export history.",
    supportRestore: "Restore Pro",
    supportRestoreBody:
      "Open Pro, choose Restore purchases, and use the Google Play or Apple account that made the original purchase.",
    supportContact: "Contact",
    supportContactBody:
      "Email your device model, OS version, PDF page count, and the tool that showed the error. Do not attach sensitive documents.",
    privacyTitle: "PRIVACY<br>POLICY",
    privacyUpdated:
      "Effective and last updated: August 13, 2026 · App ID: com.labhub.paperdock",
    privacySummary: "Summary",
    privacySummaryBody:
      "Paper Dock is a local-first PDF utility with no account, advertising, analytics SDK, or document upload.",
    privacyCollection: "Developer collection",
    privacyCollectionBody:
      "The developer does not collect, sell, or share account information, document contents, usage analytics, advertising identifiers, location, or contacts.",
    privacyDocuments: "Documents and storage",
    privacyDocumentsBody:
      "Selected PDFs are read only on the device for the operation you request. Results and history stay in app-private storage; failed or canceled partial output is removed. Originals are never changed or deleted.",
    privacySharing: "Sharing",
    privacySharingBody:
      "A selected result leaves the app only when you explicitly use the operating-system share interface and choose a destination.",
    privacyPurchases: "Purchases",
    privacyPurchasesBody:
      "Google Play or Apple processes the one-time Pro purchase and restoration. Paper Dock receives product and entitlement status, stores the last verified entitlement on-device, and never receives payment-card details.",
    privacyTracking: "Ads and tracking",
    privacyTrackingBody:
      "Paper Dock includes no advertising or analytics SDK and performs no app tracking. Store connectivity is used only for purchase status; PDF processing requires no network.",
    privacyRetention: "Retention and deletion",
    privacyRetentionBody:
      "Results remain in app-private storage until you delete them. Android backup and device transfer are disabled. On iOS, app data may be included in encrypted device or iCloud backups according to your settings. Uninstalling removes app-private data from the device.",
    privacyChildren: "Children",
    privacyChildrenBody:
      "Paper Dock is not designed for children and does not knowingly collect personal information.",
    privacyChanges: "Changes and contact",
    privacyChangesBody:
      "If data practices change, this page and the store disclosure will be updated. Contact:",
  };

  const translations = {
    en,
    ko: {
      navProduct: "제품",
      navSupport: "지원",
      navPrivacy: "개인정보",
      navApps: "앱 목록",
      languageLabel: "언어",
      iconAlt: "Paper Dock 앱 아이콘",
      homeTitle: "PDF를<br>도크에.",
      homeIntro:
        "합치기, 압축, 페이지 추출, 회전, 워터마크와 보호·정리를 휴대폰 안에서 처리합니다. 계정, 클라우드 업로드, 광고가 없습니다.",
      homeFeaturesAction: "기능 보기",
      homeSupportAction: "도움 받기",
      toolMerge: "합치기",
      toolMergeBody: "PDF를 추가·제거·재정렬해 하나로 만듭니다.",
      toolCompress: "스마트 압축",
      toolCompressBody: "이미지 품질과 예상 결과 용량을 조절합니다.",
      toolExtract: "페이지 추출",
      toolExtractBody: "미리보기에서 필요한 페이지만 정확히 고릅니다.",
      toolRotate: "회전",
      toolRotateBody: "전체 문서를 90°·180°·270° 회전합니다.",
      toolWatermark: "워터마크 · Pro",
      toolWatermarkBody: "텍스트, 크기, 투명도와 위치를 미리 보며 설정합니다.",
      toolProtect: "보호·정리 · Pro",
      toolProtectBody: "암호를 설정하고 문서 메타데이터를 제거합니다.",
      homeValue:
        "무료 도구에는 광고, 강제 워터마크, 일일 제한이 없습니다. 한 번 구매로 Pro가 영구 해제됩니다.",
      supportTitle: "지원<br>데스크",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · 앱의 12개 언어 모두 지원",
      supportPassword: "암호로 보호된 PDF",
      supportPasswordBody:
        "잠금 해제된 사본을 선택하세요. Paper Dock은 암호를 우회하거나 원본을 변경하지 않습니다.",
      supportDamaged: "손상된 PDF",
      supportDamagedBody:
        "원본 앱에서 PDF를 다시 내보내세요. 실패한 작업은 부분 결과를 삭제하고 원본을 그대로 둡니다.",
      supportCancel: "작업 취소",
      supportCancelBody:
        "취소하면 생성 중인 파일을 제거하고 원본을 보존합니다. 완료된 결과만 내보내기 기록에 추가됩니다.",
      supportRestore: "Pro 구매 복원",
      supportRestoreBody:
        "Pro 화면에서 구매 복원을 선택하고 처음 구매한 Google Play 또는 Apple 계정을 사용하세요.",
      supportContact: "문의",
      supportContactBody:
        "기기 모델, 운영체제 버전, PDF 페이지 수와 오류가 난 도구를 이메일로 알려 주세요. 민감한 문서는 첨부하지 마세요.",
      privacyTitle: "개인정보<br>처리방침",
      privacyUpdated:
        "시행일 및 최종 수정일: 2026년 8월 13일 · 앱 ID: com.labhub.paperdock",
      privacySummary: "요약",
      privacySummaryBody:
        "Paper Dock은 계정, 광고, 분석 SDK 또는 문서 업로드 없이 작동하는 로컬 우선 PDF 도구입니다.",
      privacyCollection: "개발자가 수집하는 정보",
      privacyCollectionBody:
        "개발자는 계정 정보, 문서 내용, 사용 분석, 광고 식별자, 위치 또는 연락처를 수집하거나 판매·공유하지 않습니다.",
      privacyDocuments: "문서 처리와 저장",
      privacyDocumentsBody:
        "선택한 PDF는 요청한 작업을 위해 기기 안에서만 읽습니다. 결과와 기록은 앱 전용 저장소에 남고 실패·취소한 부분 결과는 제거됩니다. 원본은 변경하거나 삭제하지 않습니다.",
      privacySharing: "공유",
      privacySharingBody:
        "사용자가 운영체제 공유 기능을 직접 실행하고 대상을 선택한 경우에만 선택한 결과가 앱 밖으로 전달됩니다.",
      privacyPurchases: "결제",
      privacyPurchasesBody:
        "일회성 Pro 결제와 복원은 Google Play 또는 Apple이 처리합니다. Paper Dock은 상품과 권한 상태만 받고 마지막 확인 권한을 기기에 저장하며 결제 카드 정보는 받지 않습니다.",
      privacyTracking: "광고와 추적",
      privacyTrackingBody:
        "광고·분석 SDK가 없고 앱 추적을 하지 않습니다. 스토어 연결은 구매 상태에만 사용되며 PDF 처리에는 네트워크가 필요 없습니다.",
      privacyRetention: "보관과 삭제",
      privacyRetentionBody:
        "결과는 사용자가 삭제할 때까지 앱 전용 저장소에 남습니다. Android 백업과 기기 전송은 꺼져 있습니다. iOS에서는 사용자 설정에 따라 암호화된 기기 또는 iCloud 백업에 포함될 수 있습니다. 앱을 제거하면 기기의 앱 전용 데이터가 삭제됩니다.",
      privacyChildren: "아동",
      privacyChildrenBody:
        "Paper Dock은 아동용으로 설계되지 않았으며 개인정보를 의도적으로 수집하지 않습니다.",
      privacyChanges: "변경 및 문의",
      privacyChangesBody:
        "데이터 처리 방식이 바뀌면 이 페이지와 스토어 공개 정보를 갱신합니다. 문의:",
    },
    ja: {
      navProduct: "製品",
      navSupport: "サポート",
      navPrivacy: "プライバシー",
      navApps: "アプリ",
      languageLabel: "言語",
      iconAlt: "Paper Dockアプリアイコン",
      homeTitle: "PDFを<br>ドックへ。",
      homeIntro:
        "結合、圧縮、ページ抽出、回転、透かし、保護・整理を端末内で完結。アカウント、クラウド送信、広告はありません。",
      homeFeaturesAction: "機能を見る",
      homeSupportAction: "サポート",
      toolMerge: "結合",
      toolMergeBody: "PDFを追加・削除・並べ替えて1つにします。",
      toolCompress: "スマート圧縮",
      toolCompressBody: "画質と推定出力サイズを調整します。",
      toolExtract: "ページ抽出",
      toolExtractBody: "プレビューから必要なページだけ選びます。",
      toolRotate: "回転",
      toolRotateBody: "文書全体を90°・180°・270°回転します。",
      toolWatermark: "透かし · Pro",
      toolWatermarkBody: "文字、サイズ、透明度、位置をプレビュー設定。",
      toolProtect: "保護と整理 · Pro",
      toolProtectBody: "パスワードを設定しメタデータを削除します。",
      homeValue:
        "無料ツールにも広告、強制透かし、日次制限はありません。1回の購入でProを永久解除。",
      supportTitle: "サポート<br>デスク",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · アプリの12言語すべてに対応",
      supportPassword: "パスワード保護PDF",
      supportPasswordBody:
        "ロック解除済みのコピーを選んでください。パスワードを回避せず原本も変更しません。",
      supportDamaged: "破損したPDF",
      supportDamagedBody:
        "元のアプリからPDFを再出力してください。失敗時は途中結果を削除し原本を保持します。",
      supportCancel: "キャンセル",
      supportCancelBody:
        "作成中ファイルを削除し原本を保持します。完了結果だけ履歴に入ります。",
      supportRestore: "Proを復元",
      supportRestoreBody:
        "Pro画面で購入を復元し、購入時のGoogle PlayまたはAppleアカウントを使用してください。",
      supportContact: "お問い合わせ",
      supportContactBody:
        "端末、OS、ページ数、エラーになった機能をメールでお知らせください。機密文書は添付しないでください。",
      privacyTitle: "プライバシー<br>ポリシー",
      privacySummary: "概要",
      privacySummaryBody:
        "Paper Dockはアカウント、広告、解析SDK、文書アップロードのないローカル優先PDFツールです。",
      privacyCollection: "開発者による収集",
      privacyDocuments: "文書と保存",
      privacySharing: "共有",
      privacyPurchases: "購入",
      privacyTracking: "広告と追跡",
      privacyRetention: "保持と削除",
      privacyChildren: "子ども",
      privacyChanges: "変更と連絡先",
    },
    "zh-CN": {
      navProduct: "产品",
      navSupport: "支持",
      navPrivacy: "隐私",
      navApps: "应用",
      languageLabel: "语言",
      iconAlt: "Paper Dock 应用图标",
      homeTitle: "让 PDF<br>轻松靠岸。",
      homeIntro:
        "在手机本地完成合并、压缩、提取、旋转、水印、保护与清理。无需账户、云上传或广告。",
      homeFeaturesAction: "查看工具",
      homeSupportAction: "获取支持",
      toolMerge: "合并",
      toolMergeBody: "添加、删除并排序 PDF，合为一个文档。",
      toolCompress: "智能压缩",
      toolCompressBody: "平衡图像质量和预计输出大小。",
      toolExtract: "提取页面",
      toolExtractBody: "从可视预览中准确选择所需页面。",
      toolRotate: "旋转",
      toolRotateBody: "将整个文档旋转 90°、180° 或 270°。",
      toolWatermark: "水印 · Pro",
      toolWatermarkBody: "预览并设置文字、大小、透明度和位置。",
      toolProtect: "保护与清理 · Pro",
      toolProtectBody: "设置密码并移除文档元数据。",
      homeValue: "免费工具没有广告、强制水印或每日限制。一次购买永久解锁 Pro。",
      supportTitle: "支持<br>中心",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · 支持应用全部 12 种语言",
      supportPassword: "受密码保护的 PDF",
      supportPasswordBody:
        "请选择已解锁的副本。Paper Dock 不绕过密码，也不修改原文件。",
      supportDamaged: "损坏的 PDF",
      supportDamagedBody:
        "请从原应用重新导出 PDF。失败任务会删除不完整结果并保留原文件。",
      supportCancel: "取消任务",
      supportCancelBody:
        "取消会删除正在生成的文件并保留原文件，只有完成的结果进入历史记录。",
      supportRestore: "恢复 Pro",
      supportRestoreBody:
        "打开 Pro，选择恢复购买，并使用原购买的 Google Play 或 Apple 账户。",
      supportContact: "联系",
      supportContactBody:
        "请邮件告知设备型号、系统版本、PDF 页数和出错工具。请勿附加敏感文档。",
      privacyTitle: "隐私<br>政策",
      privacySummary: "摘要",
      privacySummaryBody:
        "Paper Dock 是本地优先的 PDF 工具，不需要账户，不含广告或分析 SDK，也不会上传文档。",
      privacyCollection: "开发者收集",
      privacyDocuments: "文档与存储",
      privacySharing: "共享",
      privacyPurchases: "购买",
      privacyTracking: "广告与跟踪",
      privacyRetention: "保留与删除",
      privacyChildren: "儿童",
      privacyChanges: "变更与联系",
    },
    "zh-TW": {
      navProduct: "產品",
      navSupport: "支援",
      navPrivacy: "隱私",
      navApps: "應用程式",
      languageLabel: "語言",
      iconAlt: "Paper Dock 應用程式圖示",
      homeTitle: "讓 PDF<br>輕鬆靠岸。",
      homeIntro:
        "在手機本機完成合併、壓縮、擷取、旋轉、浮水印、保護與清理。不需帳號、雲端上傳或廣告。",
      homeFeaturesAction: "查看工具",
      homeSupportAction: "取得支援",
      toolMerge: "合併",
      toolMergeBody: "新增、移除並排序 PDF，合成一份文件。",
      toolCompress: "智慧壓縮",
      toolCompressBody: "平衡影像品質與預估輸出大小。",
      toolExtract: "擷取頁面",
      toolExtractBody: "從視覺預覽中精確選擇所需頁面。",
      toolRotate: "旋轉",
      toolRotateBody: "將整份文件旋轉 90°、180° 或 270°。",
      toolWatermark: "浮水印 · Pro",
      toolWatermarkBody: "預覽並設定文字、大小、透明度與位置。",
      toolProtect: "保護與清理 · Pro",
      toolProtectBody: "設定密碼並移除文件中繼資料。",
      homeValue:
        "免費工具沒有廣告、強制浮水印或每日限制。一次購買永久解鎖 Pro。",
      supportTitle: "支援<br>中心",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · 支援應用程式全部 12 種語言",
      supportPassword: "受密碼保護的 PDF",
      supportPasswordBody:
        "請選擇已解鎖的副本。Paper Dock 不會繞過密碼或修改原檔。",
      supportDamaged: "損壞的 PDF",
      supportDamagedBody:
        "請從原應用程式重新匯出 PDF。失敗任務會刪除不完整結果並保留原檔。",
      supportCancel: "取消任務",
      supportCancelBody:
        "取消會移除正在建立的檔案並保留原檔，只有完成的結果會進入記錄。",
      supportRestore: "回復 Pro",
      supportRestoreBody:
        "開啟 Pro、選擇回復購買，並使用原購買的 Google Play 或 Apple 帳號。",
      supportContact: "聯絡",
      supportContactBody:
        "請透過電子郵件提供裝置型號、系統版本、PDF 頁數與發生錯誤的工具。請勿附加敏感文件。",
      privacyTitle: "隱私權<br>政策",
      privacySummary: "摘要",
      privacySummaryBody:
        "Paper Dock 是本機優先的 PDF 工具，不需帳號、不含廣告或分析 SDK，也不會上傳文件。",
      privacyCollection: "開發者收集",
      privacyDocuments: "文件與儲存",
      privacySharing: "分享",
      privacyPurchases: "購買",
      privacyTracking: "廣告與追蹤",
      privacyRetention: "保留與刪除",
      privacyChildren: "兒童",
      privacyChanges: "變更與聯絡",
    },
  };

  const sharedRomance = {
    es: {
      navProduct: "Producto",
      navSupport: "Ayuda",
      navPrivacy: "Privacidad",
      navApps: "Apps",
      languageLabel: "Idioma",
      iconAlt: "Icono de Paper Dock",
      homeTitle: "Atraca tus<br>PDF.",
      homeIntro:
        "Combina, comprime, extrae, gira, marca, protege y limpia PDF en tu teléfono. Sin cuenta, nube ni anuncios.",
      homeFeaturesAction: "Ver herramientas",
      homeSupportAction: "Obtener ayuda",
      toolMerge: "Combinar",
      toolMergeBody: "Añade, elimina y reordena PDF en un documento.",
      toolCompress: "Compresión inteligente",
      toolCompressBody: "Equilibra calidad de imagen y tamaño estimado.",
      toolExtract: "Extraer páginas",
      toolExtractBody: "Elige las páginas exactas desde vistas previas.",
      toolRotate: "Girar",
      toolRotateBody: "Gira todo el documento 90°, 180° o 270°.",
      toolWatermark: "Marca de agua · Pro",
      toolWatermarkBody:
        "Ajusta texto, tamaño, opacidad y posición con vista previa.",
      toolProtect: "Proteger y limpiar · Pro",
      toolProtectBody: "Añade una contraseña y elimina metadatos.",
      homeValue:
        "Las herramientas gratuitas no tienen anuncios, marcas forzadas ni límite diario. Una compra desbloquea Pro para siempre.",
      supportTitle: "CENTRO DE<br>AYUDA",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · Ayuda en los 12 idiomas de la app",
      supportPassword: "PDF protegido con contraseña",
      supportPasswordBody:
        "Elige una copia desbloqueada. Paper Dock no elude contraseñas ni cambia el original.",
      supportDamaged: "PDF dañado",
      supportDamagedBody:
        "Vuelve a exportarlo desde la app original. Los trabajos fallidos borran el resultado parcial y conservan el original.",
      supportCancel: "Cancelación",
      supportCancelBody:
        "Cancelar elimina el archivo en creación y conserva el original. Solo los resultados completos entran al historial.",
      supportRestore: "Restaurar Pro",
      supportRestoreBody:
        "Abre Pro, elige Restaurar compras y usa la cuenta de Google Play o Apple de la compra original.",
      supportContact: "Contacto",
      supportContactBody:
        "Envía por correo el modelo, sistema, número de páginas y herramienta con error. No adjuntes documentos sensibles.",
      privacyTitle: "POLÍTICA DE<br>PRIVACIDAD",
      privacySummary: "Resumen",
      privacySummaryBody:
        "Paper Dock es una utilidad PDF local sin cuenta, publicidad, SDK de análisis ni subida de documentos.",
      privacyCollection: "Datos recopilados",
      privacyDocuments: "Documentos y almacenamiento",
      privacySharing: "Compartir",
      privacyPurchases: "Compras",
      privacyTracking: "Anuncios y seguimiento",
      privacyRetention: "Conservación y eliminación",
      privacyChildren: "Menores",
      privacyChanges: "Cambios y contacto",
    },
    de: {
      navProduct: "Produkt",
      navSupport: "Hilfe",
      navPrivacy: "Datenschutz",
      navApps: "Apps",
      languageLabel: "Sprache",
      iconAlt: "Paper-Dock-App-Symbol",
      homeTitle: "PDFs sicher<br>andocken.",
      homeIntro:
        "PDFs direkt auf dem Telefon zusammenführen, komprimieren, extrahieren, drehen, markieren, schützen und bereinigen. Ohne Konto, Cloud-Upload oder Werbung.",
      homeFeaturesAction: "Werkzeuge ansehen",
      homeSupportAction: "Hilfe erhalten",
      toolMerge: "Zusammenführen",
      toolMergeBody: "PDFs hinzufügen, entfernen, sortieren und verbinden.",
      toolCompress: "Intelligent komprimieren",
      toolCompressBody: "Bildqualität und geschätzte Größe ausbalancieren.",
      toolExtract: "Seiten extrahieren",
      toolExtractBody: "Benötigte Seiten in der Vorschau auswählen.",
      toolRotate: "Drehen",
      toolRotateBody: "Das gesamte Dokument um 90°, 180° oder 270° drehen.",
      toolWatermark: "Wasserzeichen · Pro",
      toolWatermarkBody:
        "Text, Größe, Deckkraft und Position mit Vorschau festlegen.",
      toolProtect: "Schützen & bereinigen · Pro",
      toolProtectBody: "Passwort hinzufügen und Metadaten entfernen.",
      homeValue:
        "Kostenlose Werkzeuge enthalten keine Werbung, Zwangswasserzeichen oder Tageslimits. Ein Kauf schaltet Pro dauerhaft frei.",
      supportTitle: "HILFE<br>CENTER",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · Hilfe in allen 12 App-Sprachen",
      supportPassword: "Passwortgeschützte PDF",
      supportPasswordBody:
        "Wähle eine entsperrte Kopie. Paper Dock umgeht keine Passwörter und ändert das Original nicht.",
      supportDamaged: "Beschädigte PDF",
      supportDamagedBody:
        "Exportiere die PDF erneut aus der ursprünglichen App. Fehlgeschlagene Aufträge löschen Teilergebnisse und bewahren das Original.",
      supportCancel: "Abbrechen",
      supportCancelBody:
        "Beim Abbrechen wird die entstehende Datei entfernt und das Original bewahrt. Nur fertige Ergebnisse kommen in den Verlauf.",
      supportRestore: "Pro wiederherstellen",
      supportRestoreBody:
        "Öffne Pro, wähle Käufe wiederherstellen und nutze das ursprüngliche Google-Play- oder Apple-Konto.",
      supportContact: "Kontakt",
      supportContactBody:
        "Sende Gerätemodell, Betriebssystem, Seitenzahl und betroffenes Werkzeug per E-Mail. Keine vertraulichen Dokumente anhängen.",
      privacyTitle: "DATENSCHUTZ<br>ERKLÄRUNG",
      privacySummary: "Zusammenfassung",
      privacySummaryBody:
        "Paper Dock ist ein lokales PDF-Werkzeug ohne Konto, Werbung, Analyse-SDK oder Dokument-Upload.",
      privacyCollection: "Erhebung durch den Entwickler",
      privacyDocuments: "Dokumente und Speicherung",
      privacySharing: "Freigabe",
      privacyPurchases: "Käufe",
      privacyTracking: "Werbung und Tracking",
      privacyRetention: "Aufbewahrung und Löschung",
      privacyChildren: "Kinder",
      privacyChanges: "Änderungen und Kontakt",
    },
    fr: {
      navProduct: "Produit",
      navSupport: "Assistance",
      navPrivacy: "Confidentialité",
      navApps: "Apps",
      languageLabel: "Langue",
      iconAlt: "Icône de Paper Dock",
      homeTitle: "Mettez vos PDF<br>à quai.",
      homeIntro:
        "Fusionnez, compressez, extrayez, pivotez, filigranez, protégez et nettoyez vos PDF sur le téléphone. Sans compte, cloud ni publicité.",
      homeFeaturesAction: "Voir les outils",
      homeSupportAction: "Obtenir de l’aide",
      toolMerge: "Fusionner",
      toolMergeBody: "Ajoutez, supprimez et réordonnez les PDF en un document.",
      toolCompress: "Compression intelligente",
      toolCompressBody: "Équilibrez qualité d’image et taille estimée.",
      toolExtract: "Extraire des pages",
      toolExtractBody: "Choisissez précisément les pages dans les aperçus.",
      toolRotate: "Pivoter",
      toolRotateBody: "Faites pivoter le document de 90°, 180° ou 270°.",
      toolWatermark: "Filigrane · Pro",
      toolWatermarkBody:
        "Réglez texte, taille, opacité et position avec aperçu.",
      toolProtect: "Protéger et nettoyer · Pro",
      toolProtectBody: "Ajoutez un mot de passe et supprimez les métadonnées.",
      homeValue:
        "Les outils gratuits n’ont ni pub, ni filigrane forcé, ni limite quotidienne. Un achat débloque Pro à vie.",
      supportTitle: "CENTRE<br>D’AIDE",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · Assistance dans les 12 langues de l’app",
      supportPassword: "PDF protégé par mot de passe",
      supportPasswordBody:
        "Choisissez une copie déverrouillée. Paper Dock ne contourne pas les mots de passe et ne modifie pas l’original.",
      supportDamaged: "PDF endommagé",
      supportDamagedBody:
        "Réexportez le PDF depuis l’app d’origine. Un échec supprime le résultat partiel et conserve l’original.",
      supportCancel: "Annulation",
      supportCancelBody:
        "L’annulation supprime le fichier en cours et préserve l’original. Seuls les résultats terminés entrent dans l’historique.",
      supportRestore: "Restaurer Pro",
      supportRestoreBody:
        "Ouvrez Pro, choisissez Restaurer les achats et utilisez le compte Google Play ou Apple de l’achat initial.",
      supportContact: "Contact",
      supportContactBody:
        "Envoyez par e-mail le modèle, le système, le nombre de pages et l’outil concerné. Ne joignez aucun document sensible.",
      privacyTitle: "POLITIQUE DE<br>CONFIDENTIALITÉ",
      privacySummary: "Résumé",
      privacySummaryBody:
        "Paper Dock est un outil PDF local sans compte, publicité, SDK d’analyse ni envoi de documents.",
      privacyCollection: "Collecte par le développeur",
      privacyDocuments: "Documents et stockage",
      privacySharing: "Partage",
      privacyPurchases: "Achats",
      privacyTracking: "Publicité et suivi",
      privacyRetention: "Conservation et suppression",
      privacyChildren: "Enfants",
      privacyChanges: "Modifications et contact",
    },
    "pt-BR": {
      navProduct: "Produto",
      navSupport: "Suporte",
      navPrivacy: "Privacidade",
      navApps: "Apps",
      languageLabel: "Idioma",
      iconAlt: "Ícone do Paper Dock",
      homeTitle: "Atraque seus<br>PDFs.",
      homeIntro:
        "Una, comprima, extraia, gire, marque, proteja e limpe PDFs no celular. Sem conta, nuvem ou anúncios.",
      homeFeaturesAction: "Ver ferramentas",
      homeSupportAction: "Obter suporte",
      toolMerge: "Unir",
      toolMergeBody: "Adicione, remova e reordene PDFs em um documento.",
      toolCompress: "Compressão inteligente",
      toolCompressBody: "Equilibre qualidade e tamanho estimado.",
      toolExtract: "Extrair páginas",
      toolExtractBody: "Escolha exatamente as páginas nas prévias.",
      toolRotate: "Girar",
      toolRotateBody: "Gire todo o documento em 90°, 180° ou 270°.",
      toolWatermark: "Marca d’água · Pro",
      toolWatermarkBody:
        "Ajuste texto, tamanho, opacidade e posição com prévia.",
      toolProtect: "Proteger e limpar · Pro",
      toolProtectBody: "Adicione senha e remova metadados.",
      homeValue:
        "As ferramentas grátis não têm anúncios, marca forçada ou limite diário. Uma compra desbloqueia o Pro para sempre.",
      supportTitle: "CENTRAL DE<br>SUPORTE",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · Suporte nos 12 idiomas do app",
      supportPassword: "PDF protegido por senha",
      supportPasswordBody:
        "Escolha uma cópia desbloqueada. O Paper Dock não contorna senhas nem altera o original.",
      supportDamaged: "PDF danificado",
      supportDamagedBody:
        "Exporte novamente pelo app original. Falhas removem o resultado parcial e preservam o original.",
      supportCancel: "Cancelamento",
      supportCancelBody:
        "Cancelar remove o arquivo em criação e preserva o original. Só resultados concluídos entram no histórico.",
      supportRestore: "Restaurar Pro",
      supportRestoreBody:
        "Abra o Pro, toque em Restaurar compras e use a conta Google Play ou Apple da compra original.",
      supportContact: "Contato",
      supportContactBody:
        "Envie modelo, sistema, número de páginas e ferramenta com erro por e-mail. Não anexe documentos sensíveis.",
      privacyTitle: "POLÍTICA DE<br>PRIVACIDADE",
      privacySummary: "Resumo",
      privacySummaryBody:
        "Paper Dock é um utilitário PDF local sem conta, anúncios, SDK de análise ou envio de documentos.",
      privacyCollection: "Coleta pelo desenvolvedor",
      privacyDocuments: "Documentos e armazenamento",
      privacySharing: "Compartilhamento",
      privacyPurchases: "Compras",
      privacyTracking: "Anúncios e rastreamento",
      privacyRetention: "Retenção e exclusão",
      privacyChildren: "Crianças",
      privacyChanges: "Alterações e contato",
    },
    it: {
      navProduct: "Prodotto",
      navSupport: "Supporto",
      navPrivacy: "Privacy",
      navApps: "App",
      languageLabel: "Lingua",
      iconAlt: "Icona di Paper Dock",
      homeTitle: "Attracca i tuoi<br>PDF.",
      homeIntro:
        "Unisci, comprimi, estrai, ruota, filigrana, proteggi e pulisci i PDF sul telefono. Senza account, cloud o pubblicità.",
      homeFeaturesAction: "Scopri gli strumenti",
      homeSupportAction: "Ottieni supporto",
      toolMerge: "Unisci",
      toolMergeBody: "Aggiungi, rimuovi e riordina PDF in un documento.",
      toolCompress: "Compressione intelligente",
      toolCompressBody: "Bilancia qualità e dimensione stimata.",
      toolExtract: "Estrai pagine",
      toolExtractBody: "Scegli le pagine esatte dalle anteprime.",
      toolRotate: "Ruota",
      toolRotateBody: "Ruota l’intero documento di 90°, 180° o 270°.",
      toolWatermark: "Filigrana · Pro",
      toolWatermarkBody:
        "Imposta testo, dimensione, opacità e posizione con anteprima.",
      toolProtect: "Proteggi e pulisci · Pro",
      toolProtectBody: "Aggiungi una password e rimuovi i metadati.",
      homeValue:
        "Gli strumenti gratuiti non hanno pubblicità, filigrane obbligatorie o limiti giornalieri. Un acquisto sblocca Pro per sempre.",
      supportTitle: "CENTRO<br>ASSISTENZA",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · Supporto in tutte le 12 lingue dell’app",
      supportPassword: "PDF protetto da password",
      supportPasswordBody:
        "Scegli una copia sbloccata. Paper Dock non aggira password né modifica l’originale.",
      supportDamaged: "PDF danneggiato",
      supportDamagedBody:
        "Esporta di nuovo il PDF dall’app originale. I lavori falliti eliminano il risultato parziale e conservano l’originale.",
      supportCancel: "Annullamento",
      supportCancelBody:
        "Annullando si elimina il file in creazione e si conserva l’originale. Solo i risultati completi entrano nella cronologia.",
      supportRestore: "Ripristina Pro",
      supportRestoreBody:
        "Apri Pro, scegli Ripristina acquisti e usa l’account Google Play o Apple dell’acquisto originale.",
      supportContact: "Contatti",
      supportContactBody:
        "Invia via email modello, sistema, numero di pagine e strumento con errore. Non allegare documenti sensibili.",
      privacyTitle: "INFORMATIVA<br>PRIVACY",
      privacySummary: "Riepilogo",
      privacySummaryBody:
        "Paper Dock è uno strumento PDF locale senza account, pubblicità, SDK analitici o caricamento di documenti.",
      privacyCollection: "Raccolta dello sviluppatore",
      privacyDocuments: "Documenti e archiviazione",
      privacySharing: "Condivisione",
      privacyPurchases: "Acquisti",
      privacyTracking: "Pubblicità e tracciamento",
      privacyRetention: "Conservazione ed eliminazione",
      privacyChildren: "Minori",
      privacyChanges: "Modifiche e contatti",
    },
  };
  Object.assign(translations, sharedRomance);

  const supplemental = {
    id: {
      navProduct: "Produk",
      navSupport: "Dukungan",
      navPrivacy: "Privasi",
      navApps: "Aplikasi",
      languageLabel: "Bahasa",
      iconAlt: "Ikon aplikasi Paper Dock",
      homeTitle: "Sandarkan<br>PDF Anda.",
      homeIntro:
        "Gabungkan, kompres, ekstrak, putar, beri watermark, lindungi, dan bersihkan PDF di ponsel. Tanpa akun, unggahan cloud, atau iklan.",
      homeFeaturesAction: "Lihat alat",
      homeSupportAction: "Dapatkan bantuan",
      toolMerge: "Gabungkan",
      toolMergeBody: "Tambah, hapus, dan urutkan PDF menjadi satu dokumen.",
      toolCompress: "Kompresi pintar",
      toolCompressBody: "Seimbangkan kualitas gambar dan perkiraan ukuran.",
      toolExtract: "Ekstrak halaman",
      toolExtractBody: "Pilih halaman tepat dari pratinjau visual.",
      toolRotate: "Putar",
      toolRotateBody: "Putar seluruh dokumen 90°, 180°, atau 270°.",
      toolWatermark: "Watermark · Pro",
      toolWatermarkBody:
        "Atur teks, ukuran, opasitas, dan posisi dengan pratinjau.",
      toolProtect: "Lindungi & bersihkan · Pro",
      toolProtectBody: "Tambahkan sandi dan hapus metadata.",
      homeValue:
        "Alat gratis tanpa iklan, watermark paksa, atau batas harian. Satu pembelian membuka Pro selamanya.",
      supportTitle: "PUSAT<br>DUKUNGAN",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · Dukungan untuk semua 12 bahasa aplikasi",
      supportPassword: "PDF dilindungi sandi",
      supportPasswordBody:
        "Pilih salinan yang sudah dibuka. Paper Dock tidak melewati sandi atau mengubah dokumen asli.",
      supportDamaged: "PDF rusak",
      supportDamagedBody:
        "Ekspor ulang PDF dari aplikasi asal. Pekerjaan gagal menghapus hasil parsial dan menjaga dokumen asli.",
      supportCancel: "Pembatalan",
      supportCancelBody:
        "Membatalkan akan menghapus file yang dibuat dan menjaga dokumen asli. Hanya hasil selesai yang masuk riwayat.",
      supportRestore: "Pulihkan Pro",
      supportRestoreBody:
        "Buka Pro, pilih Pulihkan pembelian, lalu gunakan akun Google Play atau Apple pembelian awal.",
      supportContact: "Kontak",
      supportContactBody:
        "Kirim model perangkat, versi OS, jumlah halaman, dan alat yang gagal melalui email. Jangan lampirkan dokumen sensitif.",
      privacyTitle: "KEBIJAKAN<br>PRIVASI",
      privacySummary: "Ringkasan",
      privacySummaryBody:
        "Paper Dock adalah alat PDF lokal tanpa akun, iklan, SDK analitik, atau unggahan dokumen.",
      privacyCollection: "Pengumpulan oleh pengembang",
      privacyDocuments: "Dokumen dan penyimpanan",
      privacySharing: "Berbagi",
      privacyPurchases: "Pembelian",
      privacyTracking: "Iklan dan pelacakan",
      privacyRetention: "Penyimpanan dan penghapusan",
      privacyChildren: "Anak-anak",
      privacyChanges: "Perubahan dan kontak",
    },
    hi: {
      navProduct: "उत्पाद",
      navSupport: "सहायता",
      navPrivacy: "गोपनीयता",
      navApps: "ऐप्स",
      languageLabel: "भाषा",
      iconAlt: "Paper Dock ऐप आइकन",
      homeTitle: "अपने PDF को<br>डॉक करें।",
      homeIntro:
        "PDF को फ़ोन पर ही मिलाएँ, संपीड़ित करें, पृष्ठ निकालें, घुमाएँ, वॉटरमार्क लगाएँ, सुरक्षित और साफ़ करें। न खाता, न क्लाउड अपलोड, न विज्ञापन।",
      homeFeaturesAction: "टूल देखें",
      homeSupportAction: "सहायता लें",
      toolMerge: "मिलाएँ",
      toolMergeBody: "PDF जोड़ें, हटाएँ और क्रम बदलकर एक दस्तावेज़ बनाएँ।",
      toolCompress: "स्मार्ट कंप्रेस",
      toolCompressBody: "चित्र गुणवत्ता और अनुमानित आकार संतुलित करें।",
      toolExtract: "पृष्ठ निकालें",
      toolExtractBody: "दृश्य पूर्वावलोकन से सही पृष्ठ चुनें।",
      toolRotate: "घुमाएँ",
      toolRotateBody: "पूरे दस्तावेज़ को 90°, 180° या 270° घुमाएँ।",
      toolWatermark: "वॉटरमार्क · Pro",
      toolWatermarkBody:
        "पूर्वावलोकन के साथ टेक्स्ट, आकार, पारदर्शिता और स्थान तय करें।",
      toolProtect: "सुरक्षित और साफ़ · Pro",
      toolProtectBody: "पासवर्ड जोड़ें और मेटाडेटा हटाएँ।",
      homeValue:
        "मुफ़्त टूल में विज्ञापन, जबरन वॉटरमार्क या दैनिक सीमा नहीं। एक खरीद Pro को हमेशा के लिए खोलती है।",
      supportTitle: "सहायता<br>केंद्र",
      supportUpdated:
        "Paper Dock · com.labhub.paperdock · ऐप की सभी 12 भाषाओं में सहायता",
      supportPassword: "पासवर्ड-सुरक्षित PDF",
      supportPasswordBody:
        "अनलॉक की हुई प्रति चुनें। Paper Dock पासवर्ड को बायपास या मूल फ़ाइल को नहीं बदलता।",
      supportDamaged: "क्षतिग्रस्त PDF",
      supportDamagedBody:
        "मूल ऐप से PDF फिर निर्यात करें। विफल कार्य अधूरा परिणाम हटाते हैं और मूल सुरक्षित रखते हैं।",
      supportCancel: "रद्द करना",
      supportCancelBody:
        "रद्द करने पर बन रही फ़ाइल हटती है और मूल सुरक्षित रहता है। केवल पूरे परिणाम इतिहास में आते हैं।",
      supportRestore: "Pro पुनर्स्थापित करें",
      supportRestoreBody:
        "Pro खोलें, खरीद पुनर्स्थापित करें चुनें और मूल Google Play या Apple खाता इस्तेमाल करें।",
      supportContact: "संपर्क",
      supportContactBody:
        "डिवाइस मॉडल, OS, पृष्ठ संख्या और त्रुटि वाला टूल ईमेल करें। संवेदनशील दस्तावेज़ संलग्न न करें।",
      privacyTitle: "गोपनीयता<br>नीति",
      privacySummary: "सारांश",
      privacySummaryBody:
        "Paper Dock एक स्थानीय PDF टूल है जिसमें खाता, विज्ञापन, एनालिटिक्स SDK या दस्तावेज़ अपलोड नहीं है।",
      privacyCollection: "डेवलपर का संग्रह",
      privacyDocuments: "दस्तावेज़ और संग्रहण",
      privacySharing: "साझा करना",
      privacyPurchases: "खरीद",
      privacyTracking: "विज्ञापन और ट्रैकिंग",
      privacyRetention: "रखना और हटाना",
      privacyChildren: "बच्चे",
      privacyChanges: "बदलाव और संपर्क",
    },
  };
  Object.assign(translations, supplemental);

  const legal = {
    ja: [
      "施行日・最終更新日：2026年8月13日 · App ID: com.labhub.paperdock",
      "開発者はアカウント情報、文書内容、利用分析、広告ID、位置情報、連絡先を収集・販売・共有しません。",
      "選択したPDFは指定された処理のため端末内でのみ読み取ります。結果と履歴はアプリ専用領域に保存され、失敗・取消時の途中結果は削除されます。原本は変更・削除しません。",
      "結果がアプリ外に出るのは、利用者がOSの共有機能で送信先を選んだ場合だけです。",
      "買い切りProの購入と復元はGoogle PlayまたはAppleが処理します。本アプリは商品・権利状態と端末内の最終確認権利だけを扱い、カード情報を受け取りません。",
      "広告・解析SDKはなく、追跡もしません。ストア通信は購入状態の確認だけに使い、PDF処理はオフラインで動作します。",
      "結果は削除するまでアプリ専用領域に残ります。Androidのバックアップと端末移行は無効です。iOSでは設定により暗号化バックアップに含まれる場合があります。アンインストールで端末内データは削除されます。",
      "子ども向けに設計されておらず、個人情報を意図的に収集しません。",
      "取扱いが変わる場合、このページとストア表示を更新します。連絡先：",
    ],
    "zh-CN": [
      "生效及最后更新：2026年8月13日 · 应用 ID：com.labhub.paperdock",
      "开发者不会收集、出售或共享账户信息、文档内容、使用分析、广告标识符、位置或联系人。",
      "所选 PDF 仅在设备上为您请求的操作读取。结果和历史记录保存在应用专用存储中；失败或取消产生的不完整文件会删除。原文件不会被更改或删除。",
      "只有您主动使用系统共享功能并选择目标时，所选结果才会离开应用。",
      "一次性 Pro 购买和恢复由 Google Play 或 Apple 处理。Paper Dock 只接收商品与权限状态并在设备上保存最后确认的权限，不接收银行卡信息。",
      "不含广告或分析 SDK，也不进行应用跟踪。仅购买状态需要连接商店，PDF 处理无需网络。",
      "结果在您删除前保存在应用专用存储中。Android 备份和设备转移已禁用；iOS 数据可能按设置进入加密备份。卸载会删除设备上的应用专用数据。",
      "本应用并非面向儿童，也不会故意收集个人信息。",
      "若数据处理方式发生变化，我们会更新本页面和商店披露。联系：",
    ],
    "zh-TW": [
      "生效及最後更新：2026年8月13日 · App ID：com.labhub.paperdock",
      "開發者不會收集、出售或分享帳號資訊、文件內容、使用分析、廣告識別碼、位置或聯絡人。",
      "所選 PDF 僅在裝置上為您要求的作業讀取。結果與記錄存於應用程式專用空間；失敗或取消的不完整檔案會移除。原檔不會被變更或刪除。",
      "只有您主動使用系統分享功能並選擇目的地時，所選結果才會離開應用程式。",
      "一次性 Pro 購買與回復由 Google Play 或 Apple 處理。Paper Dock 僅接收商品與權限狀態並在裝置儲存最後確認的權限，不接收付款卡資訊。",
      "不含廣告或分析 SDK，也不進行應用程式追蹤。僅購買狀態需要連接商店，PDF 處理不需網路。",
      "結果在您刪除前留在應用程式專用空間。Android 備份與裝置轉移已停用；iOS 資料可能依設定納入加密備份。解除安裝會刪除裝置上的專用資料。",
      "本應用程式並非為兒童設計，也不會刻意收集個人資訊。",
      "若資料處理方式變更，我們會更新本頁面與商店揭露。聯絡：",
    ],
    es: [
      "Vigente y actualizado: 13 de agosto de 2026 · ID: com.labhub.paperdock",
      "El desarrollador no recopila, vende ni comparte datos de cuenta, contenido de documentos, analíticas, identificadores publicitarios, ubicación o contactos.",
      "Los PDF se leen solo en el dispositivo para la tarea solicitada. Resultados e historial quedan en almacenamiento privado; se borran salidas parciales fallidas o canceladas. Los originales nunca se modifican ni eliminan.",
      "Un resultado sale de la app solo cuando usas explícitamente el menú de compartir del sistema y eliges un destino.",
      "Google Play o Apple procesa la compra única de Pro y su restauración. Paper Dock recibe el estado del producto y derecho, guarda la última verificación en el dispositivo y nunca recibe datos de tarjeta.",
      "No hay SDK de anuncios o analíticas ni seguimiento. La conexión con la tienda solo comprueba compras; procesar PDF no requiere red.",
      "Los resultados permanecen hasta que los eliminas. En Android están desactivados la copia y transferencia; en iOS pueden incluirse en copias cifradas según tus ajustes. Desinstalar borra los datos privados del dispositivo.",
      "Paper Dock no está diseñado para menores y no recopila intencionadamente información personal.",
      "Si cambian estas prácticas, actualizaremos esta página y la información de la tienda. Contacto:",
    ],
    de: [
      "Gültig und zuletzt aktualisiert: 13. August 2026 · App-ID: com.labhub.paperdock",
      "Der Entwickler erhebt, verkauft oder teilt keine Kontoangaben, Dokumentinhalte, Nutzungsanalysen, Werbe-IDs, Standorte oder Kontakte.",
      "PDFs werden nur für die gewählte Aufgabe auf dem Gerät gelesen. Ergebnisse und Verlauf bleiben im privaten App-Speicher; unvollständige Ausgaben werden bei Fehler oder Abbruch gelöscht. Originale werden nie geändert oder gelöscht.",
      "Ein Ergebnis verlässt die App nur, wenn du ausdrücklich die Systemfreigabe nutzt und ein Ziel wählst.",
      "Google Play oder Apple verarbeitet den einmaligen Pro-Kauf und die Wiederherstellung. Paper Dock erhält Produkt- und Berechtigungsstatus, speichert die letzte Bestätigung lokal und erhält keine Kartendaten.",
      "Keine Werbe- oder Analyse-SDKs und kein Tracking. Die Store-Verbindung dient nur dem Kaufstatus; PDF-Verarbeitung funktioniert offline.",
      "Ergebnisse bleiben bis zur Löschung im privaten Speicher. Android-Backup und Geräteübertragung sind aus; unter iOS können Daten je nach Einstellung in verschlüsselten Backups liegen. Deinstallation entfernt lokale App-Daten.",
      "Paper Dock richtet sich nicht an Kinder und erhebt wissentlich keine personenbezogenen Daten.",
      "Bei Änderungen aktualisieren wir diese Seite und die Store-Angaben. Kontakt:",
    ],
    fr: [
      "Date d’effet et dernière mise à jour : 13 août 2026 · ID : com.labhub.paperdock",
      "Le développeur ne collecte, vend ni partage d’informations de compte, contenu de documents, analyses, identifiants publicitaires, position ou contacts.",
      "Les PDF sont lus uniquement sur l’appareil pour l’opération demandée. Résultats et historique restent dans le stockage privé ; les sorties partielles échouées ou annulées sont supprimées. Les originaux ne sont jamais modifiés ni supprimés.",
      "Un résultat ne quitte l’app que lorsque vous utilisez explicitement le partage du système et choisissez une destination.",
      "Google Play ou Apple traite l’achat unique Pro et sa restauration. Paper Dock reçoit l’état du produit et du droit, conserve la dernière vérification sur l’appareil et ne reçoit aucune donnée de carte.",
      "Aucun SDK publicitaire ou analytique et aucun suivi. La connexion au store sert uniquement au statut d’achat ; le traitement PDF fonctionne hors ligne.",
      "Les résultats restent jusqu’à leur suppression. Sauvegarde et transfert Android sont désactivés ; sous iOS, les données peuvent figurer dans des sauvegardes chiffrées selon vos réglages. La désinstallation supprime les données locales.",
      "Paper Dock n’est pas destiné aux enfants et ne collecte pas sciemment d’informations personnelles.",
      "Si ces pratiques changent, cette page et les déclarations du store seront mises à jour. Contact :",
    ],
    "pt-BR": [
      "Vigente e atualizado em: 13 de agosto de 2026 · ID: com.labhub.paperdock",
      "O desenvolvedor não coleta, vende nem compartilha dados de conta, conteúdo de documentos, análises, identificadores de publicidade, localização ou contatos.",
      "Os PDFs são lidos apenas no dispositivo para a operação pedida. Resultados e histórico ficam no armazenamento privado; saídas parciais de falhas ou cancelamentos são removidas. Os originais nunca são alterados ou apagados.",
      "Um resultado só sai do app quando você usa explicitamente o compartilhamento do sistema e escolhe um destino.",
      "Google Play ou Apple processa a compra única do Pro e a restauração. O Paper Dock recebe status de produto e direito, guarda a última verificação no dispositivo e nunca recebe dados de cartão.",
      "Não há SDK de anúncios ou análise nem rastreamento. A conexão à loja serve apenas ao status da compra; processar PDF não exige rede.",
      "Os resultados ficam até você apagá-los. Backup e transferência no Android estão desativados; no iOS, dados podem entrar em backups criptografados conforme seus ajustes. Desinstalar remove os dados locais do app.",
      "O Paper Dock não foi criado para crianças e não coleta conscientemente informações pessoais.",
      "Se essas práticas mudarem, esta página e a declaração da loja serão atualizadas. Contato:",
    ],
    it: [
      "In vigore e aggiornato il 13 agosto 2026 · ID: com.labhub.paperdock",
      "Lo sviluppatore non raccoglie, vende o condivide dati dell’account, contenuti dei documenti, analisi, identificatori pubblicitari, posizione o contatti.",
      "I PDF vengono letti solo sul dispositivo per l’operazione richiesta. Risultati e cronologia restano nello spazio privato; gli output parziali di operazioni fallite o annullate vengono eliminati. Gli originali non cambiano né vengono eliminati.",
      "Un risultato lascia l’app solo quando usi esplicitamente la condivisione di sistema e scegli una destinazione.",
      "Google Play o Apple gestisce l’acquisto una tantum di Pro e il ripristino. Paper Dock riceve stato di prodotto e diritto, salva l’ultima verifica sul dispositivo e non riceve dati di carte.",
      "Nessun SDK pubblicitario o analitico e nessun tracciamento. La connessione allo store serve solo allo stato acquisti; l’elaborazione PDF funziona offline.",
      "I risultati restano fino alla loro eliminazione. Backup e trasferimento Android sono disattivati; su iOS i dati possono entrare in backup cifrati secondo le impostazioni. Disinstallare rimuove i dati locali.",
      "Paper Dock non è progettato per bambini e non raccoglie consapevolmente informazioni personali.",
      "Se queste pratiche cambiano, aggiorneremo questa pagina e le dichiarazioni dello store. Contatto:",
    ],
    id: [
      "Berlaku dan terakhir diperbarui: 13 Agustus 2026 · ID: com.labhub.paperdock",
      "Pengembang tidak mengumpulkan, menjual, atau membagikan data akun, isi dokumen, analitik penggunaan, ID iklan, lokasi, atau kontak.",
      "PDF hanya dibaca di perangkat untuk operasi yang diminta. Hasil dan riwayat tetap di penyimpanan privat; keluaran parsial dari kegagalan atau pembatalan dihapus. Dokumen asli tidak diubah atau dihapus.",
      "Hasil hanya keluar dari aplikasi saat Anda menggunakan fitur berbagi sistem dan memilih tujuan secara sadar.",
      "Google Play atau Apple memproses pembelian sekali Pro dan pemulihan. Paper Dock menerima status produk dan hak, menyimpan verifikasi terakhir di perangkat, dan tidak menerima data kartu.",
      "Tidak ada SDK iklan atau analitik dan tidak ada pelacakan. Koneksi toko hanya untuk status pembelian; pemrosesan PDF tidak memerlukan jaringan.",
      "Hasil tersimpan sampai Anda menghapusnya. Cadangan dan transfer Android dinonaktifkan; di iOS data dapat masuk cadangan terenkripsi sesuai pengaturan. Menghapus aplikasi menghapus data privat di perangkat.",
      "Paper Dock tidak dirancang untuk anak-anak dan tidak sengaja mengumpulkan informasi pribadi.",
      "Jika praktik berubah, halaman ini dan pengungkapan toko akan diperbarui. Kontak:",
    ],
    hi: [
      "प्रभावी और अंतिम अपडेट: 13 अगस्त 2026 · ऐप ID: com.labhub.paperdock",
      "डेवलपर खाता जानकारी, दस्तावेज़ सामग्री, उपयोग विश्लेषण, विज्ञापन पहचानकर्ता, स्थान या संपर्कों को एकत्र, बेचता या साझा नहीं करता।",
      "चुने गए PDF केवल अनुरोधित काम के लिए डिवाइस पर पढ़े जाते हैं। परिणाम और इतिहास निजी स्टोरेज में रहते हैं; विफल या रद्द अधूरे परिणाम हटते हैं। मूल फ़ाइल बदली या हटाई नहीं जाती।",
      "परिणाम तभी ऐप से बाहर जाता है जब आप सिस्टम शेयर सुविधा का स्पष्ट उपयोग करके गंतव्य चुनते हैं।",
      "एक बार की Pro खरीद और पुनर्स्थापना Google Play या Apple संभालता है। Paper Dock उत्पाद और अधिकार स्थिति लेता है, अंतिम सत्यापन डिवाइस पर रखता है और कार्ड विवरण नहीं लेता।",
      "विज्ञापन या विश्लेषण SDK और ट्रैकिंग नहीं है। स्टोर कनेक्शन केवल खरीद स्थिति के लिए है; PDF प्रक्रिया को नेटवर्क नहीं चाहिए।",
      "परिणाम आपके हटाने तक निजी स्टोरेज में रहते हैं। Android बैकअप और डिवाइस ट्रांसफ़र बंद हैं; iOS में सेटिंग के अनुसार एन्क्रिप्टेड बैकअप हो सकता है। ऐप हटाने पर स्थानीय डेटा मिटता है।",
      "Paper Dock बच्चों के लिए नहीं बनाया गया और जानबूझकर व्यक्तिगत जानकारी एकत्र नहीं करता।",
      "प्रक्रिया बदलने पर यह पृष्ठ और स्टोर जानकारी अपडेट होगी। संपर्क:",
    ],
  };
  const legalKeys = [
    "privacyUpdated",
    "privacyCollectionBody",
    "privacyDocumentsBody",
    "privacySharingBody",
    "privacyPurchasesBody",
    "privacyTrackingBody",
    "privacyRetentionBody",
    "privacyChildrenBody",
    "privacyChangesBody",
  ];
  for (const [locale, values] of Object.entries(legal))
    values.forEach((value, index) => {
      translations[locale][legalKeys[index]] = value;
    });

  for (const locale of Object.keys(translations)) {
    translations[locale] = { ...en, ...translations[locale] };
  }

  const normalize = (value) => {
    const raw = String(value || "").replace("_", "-");
    if (/^zh-(tw|hk|hant)/i.test(raw)) return "zh-TW";
    if (/^zh/i.test(raw)) return "zh-CN";
    if (/^pt/i.test(raw)) return "pt-BR";
    const base = raw.split("-")[0].toLowerCase();
    return locales.some(([id]) => id === base) ? base : "en";
  };
  const params = new URLSearchParams(location.search);
  const stored = (() => {
    try {
      return localStorage.getItem("paperDockLocale");
    } catch (_) {
      return null;
    }
  })();
  let current = normalize(params.get("lang") || stored || navigator.language);

  function render(locale) {
    current = normalize(locale);
    const dict = translations[current] || en;
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = dict[el.dataset.i18n] || en[el.dataset.i18n] || "";
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      el.alt = dict[key] || en[key] || "";
    });
    document.querySelectorAll("[data-locale]").forEach((select) => {
      select.innerHTML = locales
        .map(([id, label]) => `<option value="${id}">${label}</option>`)
        .join("");
      select.value = current;
      select.setAttribute("aria-label", dict.languageLabel);
    });
    document.querySelectorAll("a.local-link").forEach((link) => {
      const url = new URL(link.getAttribute("href"), location.href);
      url.searchParams.set("lang", current);
      link.href = `${url.pathname.split("/").pop()}?${url.searchParams}`;
    });
    const page = document.body.dataset.page;
    const titles = {
      home: "Paper Dock · Private PDF workbench",
      support: `Paper Dock · ${dict.navSupport}`,
      privacy: `Paper Dock · ${dict.navPrivacy}`,
    };
    document.title = titles[page] || titles.home;
    try {
      localStorage.setItem("paperDockLocale", current);
    } catch (_) {}
  }

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-locale]")) render(event.target.value);
  });
  render(current);
})();
