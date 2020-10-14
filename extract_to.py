import re

def extract_line_section(afile, beginline=0, endline=None):
    
    counter = 0
    out = []
    inside = False
    last = False
    if beginline == 0:
        inside = True
    fp = open(afile)
    while (line:= fp.readline()) and not last:
        counter += 1
        if not inside and counter == beginline:
            inside = True
        if endline and counter == endline:
            last = True
        if inside:
            out.append(line[:-1])
    fp.close()
    return out

def extract_re_section(afile, begin, end=None):
    """ end = None implies just one line from begin
    """
    counter = 0
    beginline, endline = 0,0
    out = []
    inside = False
    last = False
    fp = open(afile)
    while (line:= fp.readline()) and not last:
        counter += 1
        if re.search(begin,line):
            beginline = counter
            inside = True
            if end is None:
                last = True
        elif end and re.search(end, line):
            endline = counter
            last = True
        if inside:
            out.append(line[:-1])
    fp.close()
    return beginline, endline, out

"""
          <!-- BEGIN insert active tab -->
          <li class="active">
            <a href="#tabFacebook100120" data-toggle="tab" data-target="#tabFacebook100120">Facebook Oct 2020</a>
          <li>
          <!-- END insert inactive tab -->

<!-- insert new list -->
"""

def test_extract():
    file1 = "docs/index.html"
    file2 = "google-100120.html"
    file3 = "test.html"

    # read the sections
    be,en,content = extract_re_section(file1,
            "<!-- BEGIN insert active tab -->",
            "<!-- END insert active tab -->")
    insert_pt = content[2].find("<")
    out = content[2][0:insert_pt-2] + "<li>" + content[2][insert_pt:] + "</li>"
    be2,_,content = extract_re_section(file1,
            "<!-- insert new list -->")
    
    # get original sections
    content_top = extract_line_section(file1, beginline=0, endline=be+1)
    content_mid1 = extract_line_section(file1, beginline=en-1, endline=en)
    content_mid2 = extract_line_section(file1, beginline=en+1, endline=be2)
    content_end = extract_line_section(file1, beginline=be2+1)

    # get new sections
    _,_,cut1 = extract_re_section(file2,
            "<!-- BEGIN CUT1 -->",
            "<!-- END CUT1 -->")
    _,_,cut2 = extract_re_section(file2,
            "<!-- BEGIN CUT2 -->",
            "<!-- END CUT2 -->")
    
    # print result
    fo = open(file3, "w")
    fo.write("\n".join(content_top)+"\n")
    fo.write("\n".join(cut1[1:-1])+"\n")
    fo.write("\n".join(content_mid1)+"\n")
    fo.write(out+"\n")
    fo.write("\n".join(content_mid2)+"\n")
    fo.write("\n".join(cut2[1:-1])+"\n")
    fo.write("\n".join(content_end)+"\n")
    fo.close()
    
if __name__=="__main__":
    test_extract()
