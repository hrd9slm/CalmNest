import Image from 'next/image';

const Article = () => {
  return (
    <div className="flex max-w-7xl mx-auto my-10 p-5 border rounded-lg shadow-lg">
      <div className="w-1/3 sticky top-5 h-screen">
        <Image
          src="/images/hero1.jpg" 
          alt="Article Image"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-2/3 pl-5 overflow-y-auto h-screen">
        <h1 className="text-3xl font-bold mb-2">Article Title</h1>
        <p className="text-sm text-gray-500 mb-4">Created by Author Name</p>
        <hr className="border-t-1 border-gray-200 mb-4" />
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
          venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
          eget. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
          vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
          vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel
          leo. Integer feugiat faucibus libero, at maximus nisl suscipit
          posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum
          egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique
          sapien vestibulum lobortis. Nam eget bibendum metus, non dictum
          mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
          {/* Add more content here to enable scrolling */}
        </p>
      </div>
    </div>
  );
};

export default Article;