# لیست کارها با React، Tailwind CSS و React DnD
دیدن دموی سایت :  https://todolist-react-gamma.vercel.app/
![Capture](https://github.com/user-attachments/assets/a1276cd9-1de7-4eed-9159-0db513850c7b)


یک اپلیکیشن ساده و تعاملی لیست کارها (Todo List) که با استفاده از React ساخته شده است، با طراحی توسط Tailwind CSS و قابلیت کشیدن و رها کردن (drag-and-drop) توسط `react-dnd`.

## فهرست مطالب

- [بررسی کلی](#بررسی-کلی)
- [تکنولوژی‌های استفاده‌شده](#تکنولوژی‌های-استفاده‌شده)
- [ویژگی‌ها](#ویژگی‌ها)
- [نصب و راه‌اندازی](#نصب-و-راه‌اندازی)
- [نحوه استفاده](#نحوه-استفاده)
- [مشارکت در پروژه](#مشارکت-در-پروژه)
- [مجوز](#مجوز)

## بررسی کلی

این پروژه یک اپلیکیشن لیست کارها است که به کاربران اجازه می‌دهد تا کارهای خود را اضافه، حذف و یا ترتیب آن‌ها را تغییر دهند. این اپلیکیشن از تکنولوژی‌های زیر استفاده می‌کند:

- **React** برای رابط کاربری و منطق اپلیکیشن
- **Tailwind CSS** برای طراحی با استفاده از کلاس‌های مفهومی
- **react-dnd** برای اضافه کردن قابلیت کشیدن و رها کردن، به طوری که کاربران می‌توانند کارها را جابجا کنند

## تکنولوژی‌های استفاده‌شده

- **React**: یک کتابخانه جاوااسکریپت برای ساخت رابط‌های کاربری.
- **Tailwind CSS**: یک فریم‌ورک CSS با استفاده از کلاس‌های کمکی برای طراحی سریع و سفارشی.
- **react-dnd**: کتابخانه‌ای برای افزودن قابلیت کشیدن و رها کردن در اپلیکیشن‌های React.

## ویژگی‌ها

- اضافه کردن کار جدید به لیست
- علامت‌گذاری کارها به عنوان انجام‌شده
- حذف کارها از لیست
- جابجایی کارها با کشیدن و رها کردن (drag-and-drop)
- طراحی واکنش‌گرا با استفاده از Tailwind CSS

## نصب و راه‌اندازی

### پیش‌نیازها

قبل از شروع، مطمئن شوید که موارد زیر را در سیستم خود نصب دارید:

- [Node.js](https://nodejs.org/) (نسخه LTS توصیه‌شده)
- [npm](https://www.npmjs.com/) یا [Yarn](https://yarnpkg.com/) (مدیر بسته‌ها)

### کلون کردن مخزن

برای کلون کردن پروژه، دستور زیر را اجرا کنید:

```bash
git clone https://github.com/alirezatalebizadeh/todolist-react.git
cd todo-list-react-tailwind-react-dnd
