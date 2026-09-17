-- ============================================================
-- NK Hospital — update Dr. Mohammad Himayatullah Khan's specialty
-- in the Book Appointment (/book-an-appointment) doctor list to
-- reflect his added cardiology designation.
--
-- Run this in Supabase -> SQL Editor -> New query -> Run.
-- Safe to run more than once.
-- ============================================================

update public.doctors
set
  specialty = 'General Medicine & Cardiology'
where name = 'Dr. Mohammad Himayatullah Khan';

select name, specialty, experience, photo_url from public.doctors order by name;
