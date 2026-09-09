-- ============================================================
-- NK Hospital — update the Book Appointment (/book-an-appointment)
-- doctor list to match the Sep 2026 roster change:
--   Dr. Mahalingam        -> Dr. Syed Zafar-Ul-Islam
--   Dr. Veeresh Godi      -> Dr. Mohammad Himayatullah Khan
--
-- Updates the existing rows in place (rather than delete + insert) so
-- any appointment already booked with these doctors keeps a valid
-- doctor_id foreign key.
--
-- Run this in Supabase -> SQL Editor -> New query -> Run.
-- Safe to run more than once.
-- ============================================================

update public.doctors
set
  name = 'Dr. Syed Zafar-Ul-Islam',
  specialty = 'Orthopedics',
  experience = '',
  photo_url = 'https://res.cloudinary.com/dmhonzqrm/image/upload/v1788179694/Dr_Zafar_obmvfd.jpg'
where name = 'Dr. Mahalingam';

update public.doctors
set
  name = 'Dr. Mohammad Himayatullah Khan',
  specialty = 'General Medicine',
  experience = '33+',
  photo_url = 'https://res.cloudinary.com/dmhonzqrm/image/upload/v1788947226/3fb00ddd-0ce0-4c2e-a279-f27ec75dcda4_zhxch8.jpg'
where name = 'Dr. Veeresh Godi';

select name, specialty, experience, photo_url from public.doctors order by name;
