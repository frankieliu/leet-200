"""
          <!-- BEGIN insert active tab -->
          <li class="active">
            <a href="#tabFacebook100120" data-toggle="tab" data-target="#tabFacebook100120">Facebook Oct 2020</a>
          <li>
          <!-- END insert inactive tab -->

<!-- insert new list -->
"""
from extract_to import extract_section

def tag(f):
    extract_to 
if len(sys.argv)<2:
    sys.exit(1)

with open(sys.argv[1]) as f:
    for line in f.read().splitlines():
        pass

def
with open("index.html") as f:
    
    save_tag = False 
    savelines_tag = []
    for line in f.read().splitlines():
        if not save:
            m = re.search("<!-- BEGIN insert active tab -->", line)
            if m:
                save = True
            else:
                print(line)
        if save:
            savelines.append(line)
            m = re.search("<!-- END insert inactive tab -->", line)
            if m:
                for l in savelines:
                    print(l)
                savelines = []
                save = False
                
