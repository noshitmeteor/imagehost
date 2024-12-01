import { list } from "@vercel/blob"
import { notFound } from "next/navigation";
import { settings } from "../../../settings";
import { replace_dynamic_variables } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: { params: any }) {
    const file_name = (await params).path.join("");
    const { blobs } = await list();
    const file = blobs.find(blob => blob.pathname.trim().replaceAll(".png", "").replaceAll(".jpg", "") === file_name.trim().replaceAll(".png", "").replaceAll(".jpg", ""));

    if (!file) {
        return {
            title: "404 Not Found",
            description: "404 Not Found",
        }
    }

    return {
        title: settings.site.Title,
        description: settings.site.Description,

        openGraph: {
            title: replace_dynamic_variables(settings.embed_data.Title, file),
            description: replace_dynamic_variables(settings.embed_data.Description, file),
            images: [
                {
                    url: file.url,
                },
            ],
        },
    };
}

export default async function Page( { params }: { params: { path: string[] } }) {
    const file_name = (await params).path.join("");
    const { blobs } = await list();

    const file = blobs.find(blob => blob.pathname.trim().replaceAll(".png", "").replaceAll(".jpg", "") === file_name.trim().replaceAll(".png", "").replaceAll(".jpg", ""));
    
    if (!file) {
        return notFound();
    }

    return (
        <p>

        </p>
    )    
}