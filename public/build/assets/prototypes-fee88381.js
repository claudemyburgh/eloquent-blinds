Number.prototype.formatBytes=function(){let e=["B","KB","MB","GB","TB"],r=this,t;for(t=0;r>=1024&&t<4;t++)r/=1024;return r.toFixed(2)+e[t]};String.prototype.cleanUrl=function(){return this.replace(/\?.+/,"")};String.prototype.unSlug=function(){return this.replace(/[_-]/g," ")};String.prototype.capitalize=function(){return this.toLowerCase().replace(/\w/,e=>e.toUpperCase())};
