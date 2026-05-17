# خطوات نشر موقع Zaitoon ERP على Netlify

هذا المشروع هو موقع تسويقي عام مبني بـ Next.js.

## الطريقة الموصى بها

1. ارفع هذا المشروع إلى GitHub.
2. افتح Netlify.
3. اختر Add new site / Add new project.
4. اختر Import from Git.
5. اربط مستودع GitHub الخاص بالموقع.
6. استخدم إعدادات البناء:
   - Build command: npm run build
   - Publish directory: اتركها فارغة إذا اكتشف Netlify مشروع Next.js تلقائياً. إذا طلب قيمة، استخدم .next
7. اضغط Deploy.

## ملاحظات مهمة

- هذا الموقع مختلف عن منصة ERP الداخلية.
- لا تغيّر إعدادات Supabase أو قاعدة البيانات.
- لا تغيّر erpv1.zaitoonerp.com أثناء نشر هذا الموقع.
- بعد نجاح النشر على رابط netlify.app، اربط zaitoonerp.com فقط.
