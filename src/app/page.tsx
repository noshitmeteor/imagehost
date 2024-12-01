import { DiscordEmbedViewer } from '@/components/discord-embed-viewer'
import { redirect } from 'next/navigation'
import { settings } from '../../settings';
import Link from 'next/link';
import { replace_dynamic_variables } from "@/lib/utils";
import { DownloadIcon } from '@radix-ui/react-icons';

export default async function Home() {
  if (process.env.NODE_ENV === 'production') {
    return redirect(settings.page_redirect);
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1>Welcome to your custom image host! This is how your embed will look like.</h1>
      <p className='text-sm text-muted-foreground mb-5'>This page is only available in development mode. Made with ❤️ by <Link href="https://github.com/notpoiu" className='text-blue-400' target='_blank'>upio</Link></p>
      <div>
        <p className='text-blue-400'>http://localhost:3000/exampleimage</p>
        <DiscordEmbedViewer
          title={replace_dynamic_variables(settings.embed_data.Title, {
            pathname: "exampleimage",
            size: 4325890,
            uploadedAt: new Date(),
          }, 1)}
          description={replace_dynamic_variables(settings.embed_data.Description, {
            pathname: "exampleimage",
            size: 4325890,
            uploadedAt: new Date(),
          }, 1)}
          color="#7289da"
          image="https://images.unsplash.com/photo-1579547945478-a6681fb3c3c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <Link href="/download" className="mt-5 flex items-center justify-center gap-2 text-blue-400 hover:text-blue-500">
        <DownloadIcon />
        <span>Download Configuration Files</span>
      </Link>
    </div>
  )
}

