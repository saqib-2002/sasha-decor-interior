import GalleryHeader from "./GalleryHeader";
import GalleryCarousel from "./GalleryCarousel";

export default function GallerySection(): JSX.Element {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <GalleryHeader />
        <GalleryCarousel />
      </div>
    </section>
  );
}
