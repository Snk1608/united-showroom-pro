
-- Drop the overly permissive policy
DROP POLICY "Anyone can submit enquiry" ON public.enquiries;

-- Recreate with explicit role targeting
CREATE POLICY "Public can submit enquiries" ON public.enquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND length(name) > 0
  );
