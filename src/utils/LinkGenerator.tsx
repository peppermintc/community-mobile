export const LinkGenerator: React.FC = ({ children }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const replace = (content: string) => {
    const convertContent = content.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + "</a>";
    });

    const htmlArr: string[] = [];
    convertContent.split("\n").forEach(function (text) {
      const textHtml = text;
      htmlArr.push(textHtml);
    });

    return { __html: htmlArr.join("") };
  };

  return <div dangerouslySetInnerHTML={replace(String(children))}></div>;
};
